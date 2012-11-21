// http://xkcd.com/1123/
function evenThymeIsJustHydrogenAndTime (activeNodes, indices)
{
    console.log('indices', indices);
    var hourRow = indices[0];
    var row = $('#WordClock *:nth-child(' + hourRow + ')');
    var hourLeft = indices[1];
    var hourRight = hourLeft + indices[2];
    for (var i = hourLeft; i < hourRight; i++)
    {
        var child = row.children("*:nth-child(" + i + ")");
        activeNodes.push(child);
        child.addClass("on");
    }
}

var hours = [
  // row, left, len
  [ 1, 1, 3 ], // one
  [ 2, 1, 3 ], // two
  [ 1, 4, 5 ], // three
  [ 2, 4, 4 ], // four
  [ 1, 9, 4 ], // five
  [ 3, 1, 3 ], // six
  [ 2, 8, 5 ], // seven
  [ 3, 4, 5 ], // eight
  [ 3, 9, 4 ], // nine
  [ 5, 1, 3 ], // ten
  [ 4, 1, 6 ], // eleven
  [ 4, 7, 6 ]  // twelve
];

var minTens = [
    // row, left, len
    [  8, 6, 1 ], // o
    [ 12, 8, 5 ], // -teen
    [  6, 1, 6 ], // twenty
    [  7, 1, 6 ], // thirty
    [  7, 8, 5 ], // forty
    [  8, 1, 5 ] // fifty
];

var minOnes = [
  // row, left, len
  [  8, 7, 6 ], // ’clock
  [  9, 1, 3 ], // one
  [ 10, 1, 3 ], // two
  [  9, 4, 5 ], // three
  [ 10, 4, 4 ], // four
  [  9, 9, 4 ], // five
  [ 11, 1, 3 ], // six
  [ 10, 8, 5 ], // seven
  [ 11, 4, 5 ], // eight
  [ 11, 9, 4 ], // nine


  [ 5, 10, 3 ], // ten
  [ 12, 1, 6 ], // eleven
  [  6, 7, 6 ],  // twelve

  [  7, 1, 5 ], // thirteen
  [ 10, 4, 4 ], // fourteen
  [  8, 1, 3 ], // fifteen
  [ 11, 1, 3 ], // sixteen
  [ 10, 8, 5 ], // seventeen
  [ 11, 4, 5 ], // eighteen
  [ 11, 9, 4 ] // nineteen
];

// (function($){

    $(function(){
        var activeNodes = [];
        var runOnce = null;

        var setCurrentTime = function ()
        {
            //establish what the time is
            var currentTime = new Date();
            var hour = currentTime.getHours() - 1;
            if(hour == -1){ hour = 11; }
            var minute = currentTime.getMinutes() - 1;
            if(minute == -1){ minute = 59; }
            var ampm = "am";
            if(hour > 11){
                ampm = "pm";
                hour = hour-12;
            }
            if(hour == 11){
                ampm = "pm";
            }

            minute = 9;

            // un-highlight prior active nodes
            for (var n = 0; n < activeNodes.length; n++)
            {
                activeNodes[n].removeClass("on");
            }

            // highlight the hour
            var hourIndices = hours[hour];
            evenThymeIsJustHydrogenAndTime(activeNodes, hourIndices);

            // highlight the minute's ones
            var minTen = Math.floor((minute + 1) / 10);
            var minOne = ((minute + 1) % 10);
            if ( minTen == 1 )
            {
                minOne = minute + 1;
            }
            var minOneIndices = minOnes[minOne];

            console.log('minTen: ' + minTen);
            console.log('minOne: ' + minOne);

            if ( ! (minTen && minOne == 0) )
            {
                evenThymeIsJustHydrogenAndTime(activeNodes, minOneIndices);
            }

            if ( minOne < 10 || minOne > 12 )
            {
                // highlight the minute's tens
                var minTenIndices = minTens[minTen];
                evenThymeIsJustHydrogenAndTime(activeNodes, minTenIndices);
            }

            if ( runOnce )
            {
                // clear the one-time interval
                clearInterval(runOnce)
                // set the interval to run every minute
                setInterval(setCurrentTime, 60000);
            }
            // run this function again at the top of the minute
            else
            {
                var currentTime = new Date();
                var second = currentTime.getSeconds() - 1;
                if (second == -1) { second = 59; }
                nextInterval = Math.max((60 - second), 1);
                runOnce = setInterval(setCurrentTime, (nextInterval * 1000));
            }
        };

        // set the initial time
        setCurrentTime();
    });


// })();

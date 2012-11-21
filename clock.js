var activeNodes = [];
var backgroundColor = '#000';
var clock = null;
var offColor = '#333';
var onColor = '#fff';
var runOnce = null;

// http://xkcd.com/1123/
function evenThymeIsJustHydrogenAndTime (activeNodes, indices)
{
    // console.log('indices', indices);
    var hourRow = indices[0];
    var row = $('#WordClock *:nth-child(' + hourRow + ')');
    var hourLeft = indices[1];
    var hourRight = hourLeft + indices[2];
    for (var i = hourLeft; i < hourRight; i++)
    {
        var child = row.children("*:nth-child(" + i + ")");
        activeNodes.push(child);
        child.css('color', onColor);
        child.addClass("on");
    }
}

function clickJackAllTheThings (e)
{
    var link = $(e.currentTarget);

    var newBackgroundColor = link.css('background-color');
    if ( newBackgroundColor ) backgroundColor = newBackgroundColor;

    var newOffColor = link.data('off-color');
    if ( newOffColor ) offColor = newOffColor;

    // var newOnColor = link.data('on-color');
    var newOnColor = link.css('color');
    if ( newOnColor ) onColor = newOnColor;

    clock.css({
       'background-color': backgroundColor,
       'color': offColor
    });

    // update the highlighted nodes
    for (var n = 0; n < activeNodes.length; n++)
    {
        activeNodes[n].css('color', onColor);
    }
}

function setCurrentTime ()
{
    //establish what the time is
    var currentTime = new Date();
    var hour = currentTime.getHours() - 1;
    if(hour == -1){ hour = 11; }
    var minute = currentTime.getMinutes();
    var ampm = "am";
    if(hour > 11){
        ampm = "pm";
        hour = hour-12;
    }
    if(hour == 11){
        ampm = "pm";
    }

    // un-highlight prior active nodes
    for (var n = 0; n < activeNodes.length; n++)
    {
        activeNodes[n].css('color', offColor);
        activeNodes[n].removeClass("on");
    }

    // highlight the hour
    evenThymeIsJustHydrogenAndTime(activeNodes, hours[hour]);

    // highlight the minute's ones
    var minTen = Math.floor(minute / 10);
    var minOne = (minute % 10);

    // handle tens and teens in a special manner
    // 10, 11, and 12 => treated as extra "ones", with no "tens"
    // 13+ => treated as extra "ones", includes the "ten"
    if ( minTen == 1 )
    {
        minTen = (minOne < 3 ? 0 : 1);
        minOne += 10;
    }

    // highlight the minute's "ones"
    // if an even multiple of 10 minutes, skip the "ones"
    if ( ! (minTen && minOne == 0) )
    {
        evenThymeIsJustHydrogenAndTime(activeNodes, minOnes[minOne]);
    }

    // highlight the minute's "tens"
    // handle 10, 11, 12 in a special manner (see above)
    if ( minOne < 10 || minOne > 12 )
    {
        evenThymeIsJustHydrogenAndTime(activeNodes, minTens[minTen]);
    }

    // this method has been run once before
    // assume we're at the "top of the minute" now
    // clear the one-time interval and setup the per-minute interval
    if ( runOnce )
    {
        // clear the one-time interval
        clearInterval(runOnce)
        // set the interval to run every minute
        setInterval(setCurrentTime, 60000);
    }
    // run this function again at the top of the minute
    // but only do this ONCE!
    else
    {
        var currentTime = new Date();
        var second = currentTime.getSeconds();
        nextInterval = Math.max((60 - second), 1);
        runOnce = setInterval(setCurrentTime, (nextInterval * 1000));
    }
}


/*
Link-lists below define grid positions for the various words on the clock
*/

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


$(function ()
{
    // find the clock on the page
    clock = $('#WordClock');

    // set the initial style
    clock.css({
       'background-color': backgroundColor,
       'color': offColor
    });

    // set the initial time
    setCurrentTime();

    // hijack click events
    $('a').click(clickJackAllTheThings);
});

wordclock
=========

A customizable word clock with to-the-minute granularity. Created using HTML, CSS and JavaScript.
Inspired by [Biegert & Funk's QLOCKTWO](http://www.qlocktwo.com/info.php?lang=en). Powered by [jQuery](http://jquery.com).

Usage
-----

Usage is simple: Open index.html in your browser.

Screenshots
-----------

![Black](https://raw.github.com/f1337/wordclock/master/images/black.png)
![Brown](https://raw.github.com/f1337/wordclock/master/images/brown.png)
![Denim](https://raw.github.com/f1337/wordclock/master/images/denim.png)
![Olive](https://raw.github.com/f1337/wordclock/master/images/olive.png)
![Raspberry](https://raw.github.com/f1337/wordclock/master/images/raspberry.png)
![Red](https://raw.github.com/f1337/wordclock/master/images/red.png)
![Steel](https://raw.github.com/f1337/wordclock/master/images/steel.png)


Customization
-------------

Customize the color scheme by editing the `<nav>` segment in index.html:

    <nav>
        <a href="#" style="background-color: #000; color: #fff" data-off-color="#333">Black &amp; White</a>
        <a href="#" style="background-color: #44301C; color: #9CCFDD" data-off-color="#5E5043">Blue &amp; Brown</a>
        <a href="#" style="background-color: #DF1A21; color: #FBE1A6" data-off-color="#FB6B58">Red &amp; Cream</a>
        <a href="#" style="background-color: #063540; color: #E5D9CF" data-off-color="#176273">Blue Jeans</a>
        <a href="#" style="background-color: #730240; color: #F2BC79" data-off-color="#BF1B39">Raspberry Sorbet</a>
        <a href="#" style="background-color: #3D4010; color: #CFD936" data-off-color="#575931">Olive Martini</a>
        <a href="#" style="background-color: #6F6B79; color: #E1DEEB" data-off-color="#583736">Zoolander</a>
    </nav>

To add more color schemes, simply copy and paste one of the lines above, then customize to taste. The inline styles define the background and highlight colors for the link itself and the clock. The `data-off-color` property is used to define the unhighlighted letters. [Adobe Kuhler](https://kuler.adobe.com/) is an excellent tool for choosing color schemes.


Compatibility
-------------

wordclock *should* run in the latest CSS3/HTML5-friendly browsers, but has only been testing using Safari (6.0.2), Chrome (16.0.912.77, 23.0.1271.64) and FireFox (9.0.1, 11.0).

TODO
----

* Apply programmatic CSS text-shadows, based on current color scheme.
* Show/hide the color picker (automatically? toggle on tap screen?).
* Verify (and possibly fix) Internet Explorer support (IE9+).
* Verify (and possibly fix) Opera support.
* DRY-up the JavaScript code (it isn't pretty at the moment).


License
-------

Copyright © 2012 Michael R. Fleet.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

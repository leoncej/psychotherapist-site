/* jslint browser: true */
/* global window */
/* global document */

window.addEventListener("scroll", function () {
    var target = document.getElementById('side-nav');
    if (window.pageYOffset >= 550) {
        target.style.display = "block";
    } else if (window.pageYOffset < 550) {
        target.style.display = "none";
    }
}, false);

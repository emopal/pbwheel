// wheel 
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 5000 + 100);

btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 5000 + 100);
}
// timer
let interval = "null";
i = 60;
const p = document.getElementById("textarea");
function onTimer() {
    document.getElementById("display").innerHTML = i;
    i--;

    if (i < 0) {
        p.readOnly = true;
        document.getElementById("startStop").innerHTML = "START";
        window.clearInterval(interval);
        i = 60;
        var $poem = $('#textarea').val($('#poem').val());
        var $submission ;
        $poem.val($submission);
    }
}
function start() {
    if (interval == "null") {
        document.getElementById("startStop").innerHTML = "PAUSE";
        interval = window.setInterval(onTimer, 1000);
    } else {
        document.getElementById("startStop").innerHTML = "START";
        window.clearInterval(interval);
        interval = "null";
    }
}
function reSet() {
    window.clearInterval(interval);
    i = 60;
    document.getElementById("display").innerHTML = "00";
    document.getElementById("startStop").innerHTML = "START";
    document.getElementById("textarea").value = "";
    p.readOnly = false;
}





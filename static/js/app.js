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
        document.getElementById("startStop").innerHTML = "Start";
        window.clearInterval(interval);
        i = 60;

        $('#poem').val($('#textarea').val());
        $('.submit-btn').css('display', 'block');
    }
}
function start() {
    if (interval == "null") {
        document.getElementById("startStop").innerHTML = "Pause";
        interval = window.setInterval(onTimer, 1000);
    } else {
        document.getElementById("startStop").innerHTML = "Start";
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





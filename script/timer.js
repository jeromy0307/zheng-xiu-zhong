'use-strict';
const m = document.querySelector('#time');

// a timer function
let f = setInterval(timer, 250);
function timer() {
    const date = new Date;
    let message = "<span id='js' >" + '現在時刻：' + formates(date.getHours()) + ':' + formates(date.getMinutes()) + ':' + formates(date.getSeconds()) + "</span>" ;
    m.innerHTML = message;
}

// add "0" infront of single digits to make timer prettier.
function formates(f) {
    if (f < 10) {
        return "0" + f;
    } else {
        return f;
    }
}

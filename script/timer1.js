'use-strict';
const m = document.querySelector('#time');

// a timer function
var b=date.getMonth()+1;
let t = setInterval(timer, 250);
function timer() {
    const date = new Date;
    let message = "<span id='js' >" + '現在時刻：' + formate(date.getFullYear()) + '/' + b + '/' + formate(date.getDate()) + '&nbsp;&nbsp;' + formate(date.getHours()) + ':' + formate(date.getMinutes()) + ':' + formate(date.getSeconds()) + "</span>" ;
    m.innerHTML = message;
}

// add "0" infront of single digits to make timer prettier.
function formate(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

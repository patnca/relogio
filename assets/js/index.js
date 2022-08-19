let digitalClock = document.querySelector('.digital');
let secElement = document.querySelector('.p_s');
let minElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock () {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalClock.innerHTML = `${fixTime(hour)}:${fixTime(minute)}:${fixTime(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) -90;
    
    secElement.style.transform = `rotate(${sDeg}deg)`;
    minElement.style.transform = `rotate(${mDeg}deg)`;
    hourElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();
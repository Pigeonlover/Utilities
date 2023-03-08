// Getting the elements from the HTML
const resetButton = document.getElementById('swReset');
const startButton = document.getElementById('swStart');
const stopButton = document.getElementById('swStop');

startButton.addEventListener('click', startCount);
stopButton.addEventListener('click', stopCount);
resetButton.addEventListener('click', resetCount);

// Variables needed for the general running
let startTime;
let elapsedTime = 0;
let timeInterval;

// Conversion to hours, minutes, seconds, and milliseconds
function timeConversion(time) {
    let hourDiff = time / 3600000;
    let hh = Math.floor(hourDiff);

    let minsDiff = (hourDiff - hh) * 60;
    let mm = Math.floor(minsDiff);

    let secsDiff = (minsDiff - mm) * 60;
    let ss = Math.floor(secsDiff);

    let millsDiff = (secsDiff - ss) * 100;
    let ms = Math.floor(millsDiff);

    let formatHH = hh.toString().padStart(2, '0');
    let formatMM = mm.toString().padStart(2, '0');
    let formatSS = ss.toString().padStart(2, '0');
    let formatMS = ms.toString().padStart(2, '0');

    return `${formatHH}:${formatMM}:${formatSS}:${formatMS}`;
}


// Show count in the HTML
function printCount(text) {
    document.getElementById('swScreen').innerHTML = text;
}


// Start, stop, and reset functions
function startCount() {
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        printCount(timeConversion(elapsedTime))
    }, 10)
}

function stopCount() {
    clearInterval(timeInterval);
}

function resetCount() {
    clearInterval(timeInterval);
    printCount('00:00:00:00');
    elapsedTime = 0;
}
let reset = document.getElementById('swReset');
let start = document.getElementById('swStart');
let stop = document.getElementById('swStop');

let hours = 00;
let minutes = 00;
let seconds = 00;
let milSeconds = 00; 

document.getElementById("swScreen").innerText = `${hours} : ${minutes} : ${seconds} : ${milSeconds}`;
function currentDateTime() {
    let dateTime = new Date();

    let year = dateTime.getFullYear();
    let month = dateTime.getMonth();
    let day = dateTime.getDate();

    let hour = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    let midday = "AM";

    month = month + 1;

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    if (hour > 12) {
        hour = hour - 12;
        midday = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    } 
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let date = `${year}-${month}-${day}`;
    let time =  `${hour}:${minutes}:${seconds} ${midday}`;

    document.getElementById("dateTimeContainer").innerText = `${date}\n${time}`;

    let update = setTimeout(function() {currentDateTime()}, 1000);

}


currentDateTime();
function time() {
    var time = new Date();
    var hour, minutes, seconds, year, month, day;
    year = time.getUTCFullYear();
    month = time.getMonth()+ 1;
    day = time.getDate();
    document.getElementById("time-ymd").innerHTML = year+"-"+month+"-"+day;

    var temph = time.getHours();
    if (temph <= 9 && temph > 0) {
        hour = "0" + temph;
    } else {
        hour = temph;
    }
    var tempm = time.getMinutes();
    if (tempm < 10 && tempm >= 0) {
        minutes = "0" + tempm;
    } else {
        minutes = tempm;
    }
    var temps = time.getSeconds();
    if (temps < 10 && temps >= 0) {
        seconds = "0" + temps;
    } else {
        seconds = temps;
    }
    document.getElementById("time-hms").innerText = hour + ":" + minutes + ":" + seconds;
}
window.setInterval("time()", 1000);
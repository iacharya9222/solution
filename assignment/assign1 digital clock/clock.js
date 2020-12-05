
function digitalTime() {
    let month = ["Jan", "Feb", "Mar", "Apl", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    let time = new Date();
    let date = time.getDay() + " " + month[time.getMonth()] + " " + time.getFullYear();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
    document.getElementById("date").innerHTML = date;
}


function settime() {
    var date = new Date();


    var the_sec = date.getSeconds();
    var the_min = date.getMinutes();
    var the_how = date.getHours();
    var the_ampm = document.getElementById("ampm");


    if (the_how > 12) {
        the_ampm = the_ampm.innerHTML = "PM";

        the_how = the_how - 12;
    }

    if (the_sec < 10) {
        the_sec = "0" + the_sec;

    }
    if (the_min < 10) {
        the_min = "0" + the_min;

    }

    if (the_how < 10) {
        the_how = "0" + the_how;

    }




    document.getElementById("seconds").innerHTML = the_sec;
    document.getElementById("minutes").innerHTML = the_min;
    document.getElementById("hours").innerHTML = the_how;





}







settime();

setInterval(settime, 1000);



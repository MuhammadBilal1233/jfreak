function displaytime() {
    var datetime = new Date();
    var hrs = 23 - datetime.getHours();
    var min = 59 - datetime.getMinutes();
    var sec = 59 - datetime.getSeconds();
    // var session  =document.getElementById("session");

    // if(hrs>=12){
    //     session.innerHTML = "PM"
    // }
    // else{
    //     session.innerHTML = "AM"
    // }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    if (hrs < 10) {
        hrs = "0" + hrs
    }
    document.getElementById("hour").innerHTML = hrs
    document.getElementById("minute").innerHTML = min
    document.getElementById("second").innerHTML = sec
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

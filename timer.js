var pomTime;
var sbTime;
var lbTime;

var running = false;

var holdTime = 0;

let countdown;

var cycleNum = 0;

var startTime;



document.getElementById("sumbitTime").addEventListener("click", getData);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);


function timer(mseconds) {

    clearInterval(countdown);

    const now = Date.now();

    const then = now + mseconds;

    countdown = setInterval(() => {
        console.log("hi")
        const msecondsLeft = Math.round(then - Date.now());
        // check if we should stop it!
        if(msecondsLeft < 0) {
          clearInterval(countdown);
          return;
        }
        // display it
        displayCountdown(msecondsLeft);
        holdTime = msecondsLeft;
      }, 1000);

}

function inputToMS(minutes) {
    return minutes * 60000
}



function getData(event) {
    event.preventDefault()
    // pomTime = document.getElementById("pomSet").value === "" ? 25 : parseInt(document.getElementById("pomSet").value);
    pomTime = fn("pomSet", 25);
    // sbTime = document.getElementById("sbSet").value === "" ? 5: parseInt(document.getElementById("sbSet").value);
    sbTime = fn("sbSet", 5);
    // lbTime = document.getElementById("lbSet").value === "" ? 15: parseInt(document.getElementById("lbSet").value);
    lbTime = fn("lbSet", 15);
    startTimer(pomTime);
  }

function fn(id, def) {
    return inputToMS(document.getElementById(id).value === "" ? def : parseInt(document.getElementById(id).value));
}

function startTimer(beginningTime) {
    clearInterval(countdown);
    running = true;
    timer(beginningTime);
    document.getElementById("pauseBtn").classList.remove("hide");
    document.getElementById("pauseBtn").innerHTML == "Pause"
}

function pauseTimer(event){
    event.preventDefault()
    if(running){
        running = false;
        console.log("hold", holdTime);
        clearInterval(countdown);
        displayCountdown(holdTime);
        changeValue()
    }
    else resumeTimer();
 
}

function resumeTimer(){
    running = true;
    timer(holdTime);
    changeValue();
}

function changeValue() {
    if(document.getElementById("pauseBtn").innerHTML == "Pause") {
        document.getElementById("pauseBtn").innerHTML = "Resume"
    }
    
    else(document.getElementById("pauseBtn").innerHTML = "Pause")
}

 
// setInterval(wrapper(pomTime), 1000)
function displayCountdown(TimeMS) {
    var hours = Math.floor((TimeMS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((TimeMS % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((TimeMS % (1000 * 60)) / 1000);
    console.log("times", hours, minutes, seconds)

    const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : '' }${minutes}:${seconds < 10 ? '0' : '' }${seconds}`;
    console.log("we're in", display)
    document.getElementById("timer").innerHTML = display;
    document.title = display;
    

}

// function wrapper(time) {
    // startTime = time * 60000
    // return function Countdown() {

    // var TimeMS = startTime;

    // Get today's date and time
  
    // Time calculations for days, hours, minutes and seconds
    
    // var hours = addPadding(Math.floor((TimeMS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    // var minutes = addPadding(Math.floor((TimeMS % (1000 * 60 * 60)) / (1000 * 60)));
    // var seconds = addPadding(Math.floor((TimeMS % (1000 * 60)) / 1000));
    // console.log("times", hours, minutes, seconds)

// document.getElementById("timer").innerHTML = hours + ":"
//   + minutes + ":" + seconds;

// startTime-=1000;


    // If the count down is over, write some text 
    // if (TimeMS < 0) {
        // clearInterval();
        // document.getElementById("demo").innerHTML = "EXPIRED";
    //   }
    // }
// }

// function addPadding(inputTime){
//convert to string
//  var timeString = inputTime.toString()
// check if length is equal to one, if it is then we pad two 
// if(timeString.length === 1) {
    // return timeString.padStart(2,0)
// }
// else {
    // return inputTime
// }

// }
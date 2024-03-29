

document.getElementById("submitCustomTime").addEventListener("click", getData);
document.getElementById("submitTime").addEventListener("click", getData);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("addFive").addEventListener("click", add5);
var manualProg = document.getElementById("switchItem").checked;




function timer(mseconds) {

    clearInterval(countdown);

    const now = Date.now();

    const then = now + mseconds;

    running = true;

    changeValue();

    // alarming = false;

    countdown = setInterval(() => {
        const msecondsLeft = Math.round(then - Date.now());
        // check if we should stop it!
        if(msecondsLeft <= 2000) {
            playAlarm();
            // fadeOutAlarm();
        }
        if(msecondsLeft <= 0) {
            clearInterval(countdown);
            makeFullPom()
          return;
        }
        // display it
        displayCountdown(msecondsLeft);
        holdTime = msecondsLeft;
      }, 500);

}

function inputToMS(minutes) {
    return minutes * 60000;
    // return minutes * 10000;
}



function getData(event) {
    event.preventDefault()
    // pomTime = document.getElementById("pomSet").value === "" ? 25 : parseInt(document.getElementById("pomSet").value);
    pomTime = fn("pomSet", 25);
    // sbTime = document.getElementById("sbSet").value === "" ? 5: parseInt(document.getElementById("sbSet").value);
    sbTime = fn("sbSet", 5);
    // lbTime = document.getElementById("lbSet").value === "" ? 15: parseInt(document.getElementById("lbSet").value);
    lbTime = fn("lbSet", 15);

    PomNum=0;
    startPom();
    startTimer(pomTime);
    
  }

function fn(id, def) {
    return inputToMS(document.getElementById(id).value === "" ? def : parseInt(document.getElementById(id).value));
}

function startPom() {
    isPom = true;
    PomNum +=1;
}

function startTimer(beginningTime) {
    controlMove();
    clearInterval(countdown);
    running = true;
    timer(beginningTime);
    document.getElementById("pauseBtn").classList.remove("hide");
    document.getElementById("addFive").classList.remove("hide");
    document.getElementById("pauseBtn").innerHTML = "Pause";
    document.getElementById("submitTime").innerHTML = "Reset";
    document.getElementById("submitCustomTime").innerHTML = "Reset";   
}

function pauseTimer(event){
    event.preventDefault()
    if(running){
        running = false;
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
    if(running) {
        document.getElementById("pauseBtn").innerHTML = "Pause"
    }
    
    else(document.getElementById("pauseBtn").innerHTML = "Resume")
}

 
// setInterval(wrapper(pomTime), 1000)
function displayCountdown(TimeMS) {
    fillInDesc();
    var hours = Math.floor((TimeMS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((TimeMS % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((TimeMS % (1000 * 60)) / 1000);

    const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : '' }${minutes}:${seconds < 10 ? '0' : '' }${seconds}`;
    document.getElementById("timer").innerHTML = display;
    document.title = display;
    

}



// Pomodoro tracker

function makeFullPom() {
    // debugger;
    checkIfChecked();
    console.log("in Make full pom", manualProg);
    if (isPom === true) {
        isPom = false;
        if(PomNum % 4 === 0) {
            if(manualProg){
                holdTime = lBTime;
                running = false;
                isLB = true;
                isSB = false;
                manualProgression();
                }
            else {
                startTimer(lbTime);
                isLB = true;
                isSB = false;
                }
            }
        else {
            if(manualProg){

                holdTime = sbTime;
                isLB = false;
                isSB = true;
                manualProgression()
            }
            else {startTimer(sbTime);
            isLB = false;
            isSB = true;
            }
        }
    }
    else {
        if(manualProg) {
            isLB = false;
            isSB = false;
            holdTime = pomTime;
            startPom();
            manualProgression();
        }
        else {
            isLB = false;
            isSB = false;
            startPom();
            startTimer(pomTime);
        }
    }
}

function add5(event) {
    event.preventDefault();
    if (running) {
        running = false;
        clearInterval(countdown);
        holdTime+= 300000;
        timer(holdTime);

    }
    else {
        clearInterval(countdown);
        holdTime+= 300000;
        displayCountdown(holdTime)  
    }
}

function fillInDesc() {
    // console.log("in desc",isPom);
    if (isPom === true) {
        document.getElementById("timeDesc").innerHTML = "Time to work!";
        // console.log("in desc",isPom);
    }
    else 
        if (isSB === true) {
        document.getElementById("timeDesc").innerHTML = "Time for a short break!";
        // console.log("in desc SB", isSB);
    }
    else 
        if (isLB === true) {
        document.getElementById("timeDesc").innerHTML = "Time for a long break!";
        // console.log("in desc LB", isSB);
    }
    else {
        document.getElementById("timeDesc").innerHTML = " ";
    }
    
    }
    function checkIfChecked() {
        manualProg = document.getElementById("switchItem").checked;
    }
    function manualProgression(){
            running = false;
                clearInterval(countdown);
                displayCountdown(holdTime);
            document.getElementById("pauseBtn").innerHTML = "Next";
        }
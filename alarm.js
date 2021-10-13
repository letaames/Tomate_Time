var alarmSound = new Howl({
    src: ["./Assests/alarm.wav"],
    sprite: {
        alarm: [0,7000]
    }
  });

function playAlarm() {
    if(alarming === false) {
        alarmSound.fade(0, 1, 2000)
        // alarmSound.on('fade', () => alarmSound.fade(1, 0, 5000))
        alarmSound.once('fade', resetAlarm);
        alarmSound.play('alarm');
        console.log("play")
        alarming = true; 
        console.log(alarming)
    }
    // alarmSound.fade(0, 1, 2000);
    // alarmSound.fade(1, 0, 5000);

}

function fadeOutAlarm() {
    // alarmSound.fade(1, 0, 5000);
    console.log("stop")
    alarmSound.on('fade', () => alarmSound.stop()) 
}

function resetAlarm() {
    alarmSound.fade(1, 0, 5000);
    alarmSound.once('fade', () => alarming = false);
}
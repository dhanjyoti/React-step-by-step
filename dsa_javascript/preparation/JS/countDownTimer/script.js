let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

let timer;
let running = false;
let totalTimer;

function startCountdown(){
    if(!running){
        let hours = parseInt(hoursInput.value) || 0;
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;
        totalTimer = hours * 3600 + minutes * 60 + seconds;
        if(totalTimer > 0){
            running = true;
            timer = setInterval(updateCountdown, 1000);
        }
    }
}

function stopCountdown(){
    running = false;
    clearInterval(timer);
}

function resetCountdown(){
    if(!running){
        hoursInput.value = '';
        minutesInput.value = '';
        secondsInput.value = '';
        totalTimer = 0;
        updateDisplay();
    }
}

function updateCountdown(){
    if(totalTimer > 0){
        totalTimer--;
        updateDisplay();
    } else {
        running = false;
        clearInterval(timer);
    }
}

function updateDisplay(){
    let hours = Math.floor(totalTimer / 3600);
    let minutes = Math.floor((totalTimer % 3600) / 60);
    let seconds = totalTimer % 60;
    let display = document.getElementById('display');
    display.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}
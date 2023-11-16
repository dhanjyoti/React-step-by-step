document.getElementById("inputForm").addEventListener("submit", function(event){
    event.preventDefault();

    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML =  `<p>Input 1: ${input1Value}</p>
                            <p>Input 2: ${input2Value}</p>`;                        

    let seconds = 0;
    const hoursDisplay = document.getElementById("hours");
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");

    const interval = setInterval(function(){
        seconds++;
        const hours = Math.floor(seconds/3600);
        const minutes = Math.floor((seconds%3600)/60);
        const remainingSeconds = seconds % 60;

        hoursDisplay.textContent = hours < 10 ? `0${hours}` : hours;
        minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsDisplay.textContent = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    }, 1000);
});


    // const timer = document.getElementById("time");
    // const interval = setInterval(function(){
    //     seconds++;
    //     timer.textContent = seconds;
    // }, 1000);

    // setTimeout(function(){
    //     clearInterval(interval);
    // }, 10000);

    // console.log(input1Value);
    // console.log(input2Value);

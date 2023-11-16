document.getElementById("inputForm").addEventListener("submit", function(e){
    e.preventDefault();

    const input1Value = document.getElementById("input1").value;
    const input2Value = document.getElementById("input2").value;
    
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
                        <p>${input1Value}</p>
                        <p>${input2Value}</p>`;

    let seconds = 0;
    const timer = document.getElementById("time");
    const interval = setInterval(function(){
        seconds++;
        timer.textContent = seconds;
    }, 1000);

    setTimeout(function(){
        clearInterval(interval);
    }, 10000);
});



    // console.log(input1Value);
    // console.log(input2Value);

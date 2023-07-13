
 
function startTimer(display) {
    var seconds = "45"
    var display =document.querySelector("#timer")
    var timer = seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        console.log(timer)

        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = timer;
        if (--timer < 0) {
           timer = seconds
        }
    }, 1000);
}
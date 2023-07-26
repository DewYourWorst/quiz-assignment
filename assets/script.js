/*
Things to do
Set up variables for the text to be able to change
carry timer through each question
make functions for the questions and add buttons for the answers
when answering a question wrong it subtracts from the time
at the end use local history to make a space to inital and save your score
*/
var titleText = document.querySelector("#title")
var introText = document.querySelector("#intro")
var buttonDisp = document.querySelector(".start")


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
    firstQuestion()
    buttonDisp.style.display = 'none';
    return timer;
}

function firstQuestion(){
    introText.innerHTML = "Javascript is a ______ language. <input type='radio' class='choice' value='Scripting'> Scripting <input type='radio' class='choice' value='Programming'> Programming <input type='radio' class='choice' value='Application'> Application <input type='radio' class='choice' value='None of These'> None of These <button onclick='submitAnswer()'> Submit Answer </button>"
    
}


var submitAnswer = function() {

    var radios = document.querySelectorAll('input.choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
         console.log(val)
    }
    
    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "Scripting" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }
  };

  
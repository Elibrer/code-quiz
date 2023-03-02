

var timerCount = 0;
var time = 60;

var countdownTimer = document.getElementById("countdown");
var startBtn = document.querySelector("#start-button");
var quizCard = document.getElementById("quiz")



//START BUTTON

function begin() {

    console.log(hideIntro);

    var hideIntro = document.getElementById("intro");
    hideIntro.setAttribute("class", "hide-card");

    console.log(hideIntro);

    quizCard.removeAttribute("class");

    timerCount = setInterval(countdown, 1000);
    console.log(countdown);

    console.log("Started");



}

//TIMER
function countdown() {
time--
countdownTimer.textContent = time;

if (time <= 0) {
    stopQuiz();
}

}





//INIT GAME


//TIME SUBTRACTION




//SCORE TABLE


//STOP THE QUIZ

function stopQuiz() {
    


}



startBtn.addEventListener("click", begin);
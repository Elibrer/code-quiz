var testBtnId = document.querySelector("#test-button");

var timerCount = 0;
var time = 60;

var countdownTimerId = document.getElementById("countdown");
var startBtnId = document.querySelector("#start-button");
var quizCardId = document.getElementById("quiz")
var restartBtnId = document.querySelector("#restart");
var quizIntroId = document.getElementById("intro");
var quizQuestionTitle = document.getElementById("quiz-questions");
var quizChoices = document.getElementById("quiz-answers");

var qIndex = 0;

var quizFinished = false;

var quizQuestions = [
{
    question: "Choose the correct syntax: ",
    choices: ["var myFunction = function{insert-function-here};", "function myFunction(insert-function-name){insert-function-here};", "myFucntion function(insert-function-name){insert-function-here};"],
    answer: "function myFunction(insert-function-name){insert-function-here};",
    correctIndex: 1,
}, 
{
    question: "If you type the following code in the console window, what result will you get? \n3 > 2 > 1 === false;",
    choices: ["True", "False"],
    answer: "True",
    correctIndex: 0,
}, 
{
    question: "Choose the incorrect semantic HTML element: ",
    choices: ["place", "aside", "section", "article"],
    answer: "place",
    correctIndex: 0,
}
];





//START BUTTON
function begin() {

    console.log(quizIntroId);

    quizIntroId.setAttribute("class", "hide-card");

    console.log(quizIntroId);

    quizCardId.removeAttribute("class");

    timerCount = setInterval(timeCountdown, 1000);
    console.log(countdown);

    console.log("Started");

    showQuestions();





}

//TIMER
function timeCountdown() {
    time--
    countdownTimerId.textContent = time;

    if (time <= 0) {
        stopQuiz();
    }
}



//INIT GAME

function init() {
    quizIntroId.removeAttribute("class", "hide-card");
    quizCardId.setAttribute("class", "hide-card");
    clearInterval(timerCount);
    time = 60;
    countdownTimerId.textContent = time;
}




//RESTART/RELOAD PAGE

function restart() {

    if (quizFinished === false) {
    var premRestart = confirm("Are you sure you want to restart?");

        if (premRestart === true) {
            init();
        }
    } else {
        init();
    }
}


//DISPLAY QUESTIONS
function showQuestions() {

    
    var currentQuestion = quizQuestions[qIndex];
    quizQuestionTitle.textContent = currentQuestion.question;

    console.log(quizQuestions.title);

   for (i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        console.log(choice);
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);

        choiceBtn.textContent = i + 1 + '- ' + choice;
        quizChoices.appendChild(choiceBtn);
    }

};

function answerPress(event) {
    var answerBtns = event.target;

    console.log(answerBtns);


    if (answerBtns.value === quizQuestions[qIndex].answer) {
        console.log("Correct!");
    } else {
        subtractTime();
        console.log("Wrong!");
    }

    qIndex++;

    showQuestions();


}






//TIME SUBTRACTION
function subtractTime() {
    time = time - 10;
    console.log(time);
    if (time <= 0) {
        time = 0;
    }
    
}



//SCORE TABLE







//STOP THE QUIZ

function stopQuiz() {
    clearInterval(timerCount);
    time = 0;
    countdownTimerId.textContent = time;


}

init();

startBtnId.addEventListener("click", begin);
testBtnId.addEventListener("click", subtractTime);
restartBtnId.addEventListener("click", restart);

//Button press for the choices
quizChoices.onclick = answerPress;

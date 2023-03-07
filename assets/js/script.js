var testBtnId = document.querySelector("#test-button");

var timerCount = 0;
var time = 60;

var countdownTimerID = document.getElementById("countdown");
var startBtnID = document.querySelector("#start-button");
var quizCardID = document.getElementById("quiz")
var restartBtnID = document.querySelector("#restart");
var quizIntroID = document.getElementById("intro");
var quizQuestionTitle = document.getElementById("quiz-questions");
var quizChoices = document.getElementById("quiz-answers");
var resultText = document.getElementById("result");
var endScreenID = document.getElementById("end-quiz");
var finalScoreID = document.getElementById("final-score");
var initialsID = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submit-btn");
var restartQuizID = document.getElementById("restart-quiz");
var clearScoresBtn = document.getElementById("clear-scores");
var highscoreListID = document.getElementById("highscores-list");

var qIndex = 0;

var submitted = false;

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

    console.log(quizIntroID);

    quizIntroID.setAttribute("class", "hide-card");

    console.log(quizIntroID);

    quizCardID.removeAttribute("class");

    timerCount = setInterval(timeCountdown, 1000);
    console.log(countdown);

    console.log("Started");

    showQuestions();

}

//TIMER
function timeCountdown() {
    time--
    countdownTimerID.textContent = time;

    if (time <= 0) {
        stopQuiz();
    }
}



//INIT GAME

function init() {
    quizIntroID.removeAttribute("class", "hide-card");
    quizCardID.setAttribute("class", "hide-card");
    endScreenID.setAttribute("class", "hide-card");
    restartQuizID.setAttribute("class", "hide-card");
    clearInterval(timerCount);
    time = 60;
    countdownTimerID.textContent = time;
    qIndex = 0;
    submitted = false;
    initialsID.value = "";
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

    //console.log(quizQuestions.title);

    quizChoices.innerHTML = "";

   for (i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        //console.log(choice);
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);

        choiceBtn.textContent = i + 1 + '- ' + choice;
        quizChoices.appendChild(choiceBtn);
    }

};

function answerPress(event) {
    var answerBtns = event.target;

   // console.log(answerBtns);

    resultText.removeAttribute("class", "hide-card");

    if (answerBtns.value === quizQuestions[qIndex].answer) {
        resultText.textContent = "Correct!";
        setTimeout(function() {
            resultText.setAttribute("class", "hide-card");
        },1000);

        //console.log("Correct!");
    } else {
        resultText.textContent = "Incorrect!";
        subtractTime();
        //console.log("Wrong!");
        setTimeout(function() {
            resultText.setAttribute("class", "hide-card");
        },1000);
    }

    qIndex++;

    if (time <= 0 || qIndex === quizQuestions.length) {
        //console.log("STOP QUIZ");
        stopQuiz();

    } else {
        //console.log("NEXT Q");
        showQuestions();
    }

    


}






//TIME SUBTRACTION
function subtractTime() {
    time = time - 10;
    //console.log(time);
    if (time <= 0) {
        time = 0;
    }
    
}



//SCORE TABLE


function enterInitials() {
    var initials = initialsID.value.trim();
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    if (initials === "") {
        return;
    } else if (submitted === false) {
    
        var latestScore = {
            score: time,
            initials: initials,
        };

        highscores.push(latestScore);

        window.localStorage.setItem('highscores', JSON.stringify(highscores));
    }

    submitted = true;

    endScreenID.setAttribute("class", "hide-card");
    restartQuizID.removeAttribute("class", "hide-card");
    
    window.localStorage.getItem("highscores", JSON.stringify(highscores));


    highscores.sort(function (a, b) {
        //Sorts the highscores by highest number
        return b.score - a.score;
    });

    console.log(highscores);
    highscoreListID.innerHTML = '';

    for (i = 0; i < highscores.length; i++) {

        var highscoreList = document.createElement("li");

        var highscoreTable = highscores[i]["initials"] + "  -  " + highscores[i]["score"];

        var highscoreList = document.createElement("li");
        
        highscoreList.textContent = highscoreTable;

        console.log(highscoreTable);
        highscoreListID.appendChild(highscoreList);

    }
}


//Clear the scores from local storage
function clearScores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
    highscoreListID.innerHTML = '';


}


//STOP THE QUIZ

function stopQuiz() {
    clearInterval(timerCount);
    countdownTimerID.textContent = time;

    quizCardID.setAttribute("class", "hide-card")
    endScreenID.removeAttribute("class", "hide-card")

    finalScoreID.textContent = time;
    quizFinished = true;
}


//Initialise the script
init();
enterInitials();



//Begin the quiz button
startBtnID.addEventListener("click", begin);
//Restart the program button
restartBtnID.addEventListener("click", restart);
//Submit initials and score to highscore table button
submitScoreBtn.addEventListener("click", enterInitials);
//Clear the local storage button
clearScoresBtn.addEventListener("click", clearScores);
//Button press for choices
quizChoices.onclick = answerPress;



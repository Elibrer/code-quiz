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

var quizStarted = false;
var quizFinished = false;


//Questions for the quiz in array form

var quizQuestions = [
{
    question: "Choose the correct syntax: ",
    choices: ["var myFunction = function{insert-function-here};", "function myFunction(insert-function-name){insert-function-here};", "myFucntion function(insert-function-name){insert-function-here};"],
    answer: "function myFunction(insert-function-name){insert-function-here};",
}, 
{
    question: "If you type the following code in the console window, what result will you get? \n3 > 2 > 1 === false;",
    choices: ["True", "False"],
    answer: "True",
},
{
    question: "Choose the incorrect semantic HTML element: ",
    choices: ["place", "aside", "section", "article"],
    answer: "place",
},
{
    question: "What does CSS stands for?",
    choices: ["Casing Style Sheet", "Collating Style Sheet", "Cascading Style Sheets", "Cascade Style Sheets"],
    answer: "Cascading Style Sheets",
},
{
    question: "JavaScript File Has An Extension of:",
    choices: [".java", ".javascript", ".xml", ".js"],
    answer: ".js",
},
{
    question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
    choices: ["Alert()", "Prompt()", "Confirm()", "Msg()"],
    answer: "Prompt()",
},
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
    quizStarted = false;

    

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


//Goes to next question based on previous choice click

function answerPress(event) {
    var answerBtns = event.target;
   // console.log(answerBtns);

    resultText.removeAttribute("class", "hide-card");

    if (answerBtns.value === quizQuestions[qIndex].answer) {
        resultText.textContent = "Correct!";
        setTimeout(function() {
            resultText.setAttribute("class", "hide-card");
        },1500);

        //console.log("Correct!");
    } else {
        resultText.textContent = "Incorrect!";
        subtractTime();
        //console.log("Wrong!");
        setTimeout(function() {
            resultText.setAttribute("class", "hide-card");
        },1500);
    }

    qIndex++;

    if (time <= 0 || qIndex === quizQuestions.length) {
        setTimeout(function() {
            //console.log("STOP QUIZ");
            stopQuiz(); 
        },1000);

    } else {
        //console.log("NEXT Q");
        showQuestions();
    }
}


//TIME SUBTRACTION

function subtractTime() {
    time = time - 10;
    //console.log(time);
    if (time <= 15) {
        time = 0;
    }
    
}




//SCORE TABLE update and refresh on submit button click

function enterInitials() {
    var initials = initialsID.value.trim();

    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

        var latestScore = {
            score: time,
            initials: initials,
        };

        highscores.push(latestScore);
        window.localStorage.setItem('highscores', JSON.stringify(highscores));
        
        //Hide end screen, show restart screen
        endScreenID.setAttribute("class", "hide-card");
        restartQuizID.removeAttribute("class", "hide-card");
        
        //Sorts the highscores by highest number
        highscores.sort(function (a, b) {
            return b.score - a.score;
        });

        // console.log(highscores);
        highscoreListID.innerHTML = '';

        for (i = 0; i < highscores.length; i++) {


            var highscoreTable = highscores[i]["initials"] + "  -  " + highscores[i]["score"];

            var highscoreList = document.createElement("li");
            var lineBreak = document.createElement("hr");
            
                
            highscoreList.textContent = highscoreTable;

            // console.log(highscoreTable);
            highscoreListID.appendChild(highscoreList);
            highscoreListID.appendChild(lineBreak);
        }

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
    if (time < 0) {
        time = 0;
    }
    countdownTimerID.textContent = time;

    quizCardID.setAttribute("class", "hide-card")
    endScreenID.removeAttribute("class", "hide-card")

    finalScoreID.textContent = time;
    quizFinished = true;
}


//Initialise the script on startup

init();
enterInitials();





//BUTTONS AND EVENTS --------------->

//Begin the quiz button
startBtnID.addEventListener("click", begin);


//Begins quiz if enter is pressed
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter' && quizStarted === false) {
        begin();
        quizStarted = true;
    }
});


//Restart the program button
restartBtnID.addEventListener("click", restart);
//Submit initials and score to highscore table button
submitScoreBtn.addEventListener("click", enterInitials);


//If user presses enter to submit

initialsID.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        enterInitials();
    }
    else {
        return;
    }
});


//Clear the local storage button
clearScoresBtn.addEventListener("click", clearScores);
//Button press for choices
quizChoices.onclick = answerPress;


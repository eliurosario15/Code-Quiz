//Questions//
var questionnaire = [
    {
    quizquestion:"Javascript is known as...",
    answerOptions: ["Coffee", "Best Language ever!", "Latest Programming Language"
, "Programming language of the web"],
    correctanswer: "Programming language of the web" 
},

{
    quizquestion:"How does Java represents TEXTS?",
    answerOptions: ["Boolean", "Variable", "Array", "String"],
    correctanswer: "String" 
},

{
    quizquestion: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    answerOptions: ["Boolean", "Undefined", "Object", "Intenger"],
    correctanswer: "Object" 
},

{
    quizquestion:"How can you stop an interval timer in Javascript?",
    answerOptions: ["Stop", "Return", "ConsoleLog", "Async"],
    correctanswer: "Async" 
},

{
    quizquestion: "What is … in JS?",
    answerOptions: ["Nothing", "A string", "Adds to an Array", "Spead operator"],
    correctanswer: "Spread Operator" 
},

{
    quizquestion:"How do we write a comment in javascript?",
    answerOptions: ["@", "#", "*", "//"],
    correctanswer: "//" 
},
];



//DOM//

const quizBox = document.getElementById("questionBox");
const countDown = document.getElementById("clock");
const answers = document.getElementById("answer-options");
const submitScore  = document.getElementById("submit-score");
const beginQuiz = document.getElementById("start-button");
const response = document.getElementById("quizResponse");
const scoreInitials  = document.getElementById("initials");
const backtoStart = document.getElementById("back");

var time = 60;
var currentQuestion = 0;
var highScores  = [];

//Timer
var timeIndex;

function timeQuiz () {
time --;
countDown.textContent = time;

if (time <= 0) {
    End();
}
}

//Start Questionnaire

beginQuiz.onclick = quizBegins;

function quizBegins () {
    var removeGretting = document.getElementById("startQuiz");
    removeGretting.setAttribute("class", "remove");

    quizBox.setAttribute("class", "main");

 timeIndex = setInterval(timeQuiz, 1000);

 countDown.textContent = time;

 fetchQuestion();
}

//Get Questions

function fetchQuestion () {
    var actualQuestion = questionnaire[currentQuestion];

    var questionTitle = document.getElementById("quiz-question");
    questionTitle.textContent = actualQuestion.quizquestion;

    answers.innerHTML = "";

    actualQuestion.answerOptions.forEach(function(options, i) {
        var createButton = document.createElement("button");



        createButton.setAttribute("class", "option-button");
        createButton.setAttribute("value", options);

        createButton.textContent = i + 1 + ". " + options;

        createButton.onclick = optionsButton;

        answers.appendChild(createButton);

    });
}

function optionsButton () {
    if (this.value !== questionnaire[currentQuestion].correctanswer) {
        time -= 10;

        if (time < 0) {
            time =0;
        }
    }
    if (this.value === questionnaire[currentQuestion].correctanswer) {
        response.textContent = "Correct!";
           } else {
            response.textContent = "Incorrect!"
           }

           currentQuestion++;

    if (currentQuestion === questionnaire.length) {
        End ();
    } else {
        fetchQuestion ();
    }      
}

function End () {
    clearInterval(timeIndex);
    
    var endQuiz = document.getElementById("quiz-done");
    endQuiz.removeAttribute("class");

    quizBox.style.display = "none";


    var finalScore = document.getElementById("score");
    finalScore.textContent = time;
    
}

//Save Score

submitScore.onclick = sendScore

function sendScore (event) {
event.preventDefault();

var initialsInput = scoreInitials.value.trim();

var finalScore = {
    score: time,
    scoreInitials: initialsInput,
};

highScores.push(finalScore);
localStorage.setItem("history-score", JSON.stringify(highScores));

}

backtoStart.onclick = reload;

function reload() {
    window.location.href = "index.html";
}



























    









 




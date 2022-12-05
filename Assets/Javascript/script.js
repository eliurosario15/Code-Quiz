//Questions//
var questionnaire = [
    {
    quizquestion:"Javascript is known as...",
    questionoptions: ["Coffee", "Best Language ever!", "Latest Programming Language"
, "Programming language of the web"],
    correctanswer: "Programming language of the web" 
},

{
    quizquestion:"How does Java represents TEXTS?",
    questionoptions: ["Boolean", "Variable", "Array", "String"],
    correctanswer: "String" 
},

{
    quizquestion: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    questionoptions: ["Boolean", "Undefined", "Object", "Intenger"],
    correctanswer: "Object" 
},

{
    quizquestion:"How can you stop an interval timer in Javascript?",
    questionoptions: ["Stop", "Return", "ConsoleLog", "Async"],
    correctanswer: "Async" 
},

{
    quizquestion: "What is … in JS?",
    questionoptions: ["Nothing", "A string", "Adds to an Array", "Spead operator"],
    correctanswer: "Spread Operator" 
},

{
    quizquestion:"How do we write a comment in javascript?",
    questionoptions: ["@", "#", "*", "//"],
    correctanswer: "//" 
},
];



//DOM//

const timer = document.getElementById("clocks");
const startBtn = document.getElementById("start-button");
const questionsQuiz = document.getElementById("random-question");
const answers = document.getElementById("answernoptions");
const submitBtn = document.getElementById("submit-score");
const initials = document.getElementById("initials");
const quizBox = document.getElementById("questionBox");
const questionTitle = document.getElementById("quizQuestion");
const Answer1 = document.getElementById("options-1");
const Answer2 = document.getElementById("options-2");
const Answer3 = document.getElementById("options-3");
const Answer4 = document.getElementById("options-4");
const correct = document.getElementById ("answer-correct");
const homeScreen = document.getElementById("start-game");
var time = 60;
var timeLeft = true;
var timeStart = false;
var score = 0;
var highScores = [];
let i = 0;

//Timer

var countDown = setInterval(countdownTime, 1000);

function countdownTime () {
    if (timeStart)
    time --;
    if (time <=0) {
        endGame();
        time = 0;
    }
    document.getElementById("clocks").innerHTML = time;
}

//Start quiz//

startBtn.addEventListener("click", function() {
    quizBox.setAttribute("class", "show");
    homeScreen.setAttribute("class", "remove")
});









    









 




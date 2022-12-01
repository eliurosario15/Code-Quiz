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
const questionsQuiz = document.getElementById("quizquestion");
const options = document.getElementById("questionoptions");
const submitBtn = document.getElementById("submit-score");
const initials = document.getElementById("initials");

//Start Quiz//

function beginQuiz () {

    const afterStart = document.getElementById("start-game");
    afterStart.setAttribute("class", "remove");
    
}

//Start Button Funcionality//
startBtn.onclick = beginQuiz;







 




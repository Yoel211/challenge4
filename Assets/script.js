//var wordBlank = document.querySelector(".word-blanks");
var question = document.querySelector(".question");
//var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionDisplay = document.querySelector(".questionDisplay");


var secondsLeft = 75;
var timerInterval; 

startButton.addEventListener("click", function(){
    console.log("")
    var header = document.querySelector("header");
    header.classList.add("hidden")
    //header.classList.remove("hidden")
    showQuestion()
})

var showQuestion = function() {
     var questionEl =  document.getElementById ("question1")
     // creates the question element
     var questionText = document.createElement ("h4")
     questionText.textContent= questions[0].question
     questionEl.appendChild (questionText)
     //creates the answers element



    //  document.getElementById ("question2")
    //  document.getElementById ("question3")
    //  document.getElementById ("question4")
    //  document.getElementById ("question5")
}



var questions = [
    { 
        question: "Commomly used data types DO NOT include:",
    answers: {
        1: 'strings',
        2: 'booleans',
        3: 'alerts',
        4: 'numbers'
    },
    correctAnswer: '2'
},
{
    question: "The condition in an if/else statement is enclosed within ____.",
    answers: {
        1: 'quotes',
        2: 'curly brackets',
        3: 'parenthesis',
        4: 'square brakets'
    },
    correctAnswer: '4'
},
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            1: 'numbers and strings',
            2: 'other arrays',
            3: 'booleans',
            4: 'all of the above'
        },
        correctAnswer: '2'
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            1: 'commas',
            2: 'curly brackets',
            3: 'quotes',
            4: 'parenthesis'
        },
        correctAnswer: '2'
    },
    {
        question: "A very useful tool used durng development and debugging for printing content to the debugger is:",
        answers: {
            1: 'JavaScript',
            2: 'terminal/bash',
            3: 'for loops',
            4: 'console log'
        },
        correctAnswer: '4'
    }

];





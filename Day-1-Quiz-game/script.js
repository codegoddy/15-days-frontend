// DOM ELEMENTS
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");

const quizQuestions = [
    {
        question: "What is the capital of India?",
        answers: [
            {text: "Delhi", correct: true},
            {text: "Mumbai", incorrect: false},
            {text: "Chennai", incorrect: false},
            {text: "Bangalore", incorrect: false},
        ],
    },
    {
        question: "What is the capital of USA?",
        answers: [
            {text: "New York", incorrect: false},
            {text: "Washington", correct: true},
            {text: "Chicago", incorrect: false},
            {text: "Los Angeles", incorrect: false},
        ],
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Paris", incorrect: false},
            {text: "London", incorrect: false},
            {text: "Berlin", correct: true},
            {text: "Rome", incorrect: false},
        ],
    },
    {
        question: "What is the capital of China?",
        answers: [
            {text: "Beijing", incorrect: false},
            {text: "Shanghai", incorrect: false},
            {text: "Tianjin", incorrect: false},
            {text: "Guangzhou", correct: true},
        ],
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            {text: "Sydney", incorrect: false},
            {text: "Melbourne", incorrect: false},
            {text: "Canberra", incorrect: false},
            {text: "Brisbane", correct: true},
        ],
    }

];

// QUIZ STATE VARS

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;


totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz() {
// reset vars
    currentQuestionIndex = 0
    score = 0
    scoreSpan.textContent = score

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion() {
    // reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener('click', selectAnswer)

        answerContainer.appendChild(button);
    })
}


function selectAnswer(e) {
    if (answersDisabled) return

    answersDisabled = true;

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answerContainer.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion()
        } else {
            showResults()
        }
    }, 1000)
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "You are a genius!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "You are pretty good!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "You can do better!";
    } else if (percentage >= 40) {
        resultMessage.textContent = 'Not bad! Keep trying!';
    } else {
        resultMessage.textContent = 'You failed! Try again!';
    }
}


function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
}

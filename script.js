const questions = [
    {
        questions:"What is the capital of Canada?",
        answers:[
            {text: "New Delhi", correct:false},
            {text: "Ottawa", correct:true},
            {text: "Dakar", correct:false},
            {text: "England", correct:false},
        ]
    },
    {
        questions:"What is the capital of South Africa?",
        answers:[
            {text: "Taipen", correct:false},
            {text: "Spain", correct:false},
            {text: "Pretoria", correct:true},
            {text: "Johannesburg", correct:false},
        ]
    },
    {
        questions:"What is the capital of Haiti?",
        answers:[
            {text: "Bamako", correct:false},
            {text: "Nairobi", correct:false},
            {text: "Bamako", correct:false},
            {text: "Port au Prince", correct:true},
        ]
    },
    {
        questions:"What is the capital of Kenya?",
        answers:[
            {text: "Tajakistan", correct:false},
            {text: "Nairobi", correct:true},
            {text: "Thimphu", correct:false},
            {text: "UAE", correct:false},
        ]
    },
    {
        questions:"What is the capital of Turkey?",
        answers:[
            {text: "Tajakistan", correct:false},
            {text: "Ankara", correct:true},
            {text: "Thimphu", correct:false},
            {text: "Kingstown", correct:false},
        ]
    },
    {
        questions:"What is the capital of South Korea?",
        answers:[
            {text: "Seoul", correct:true},
            {text: "Nairobi", correct:false},
            {text: "pyo-kyung", correct:false},
            {text: "UAE", correct:false},
        ]
    },
    
];

const  questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.questions;

    currentQuestion.answers.forEach( answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
     Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();

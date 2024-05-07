const quizDatas = [
    {
        question: 'Which planet is the largest in the Solar System?',
        a: 'Venus',
        b: 'Jupiter',
        c: 'Mars',
        d: 'Neptune',
        correct: 'b'
    },
    {
        question: 'The painting known as "La Gioconda" or Mona Lisa was created by which famous Italian artist?',
        a: 'Michelangelo',
        b: 'Leonardo da Vinci',
        c: 'Raphael',
        d: 'Donatello',
        correct: 'b'
    },
    {
        question: 'Which of the following is not one of the plays by the English playwright William Shakespeare?',
        a: 'Hamlet',
        b: 'Romeo and Juliet',
        c: 'Notes from Underground',
        d: 'Othello',
        correct: 'c'
    },
    {
        question: 'Which country\'s flag features a symbol of a kangaroo?',
        a: 'Turkey',
        b: 'Mexico',
        c: 'Australia',
        d: 'South Africa',
        correct: 'c'
    },
    {
        question: 'Which of the following is not a god in Greek mythology?',
        a: 'Apollo',
        b: 'Hermes',
        c: 'Zeus',
        d: 'Hades',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizDatas[currentQuiz];

    deselectedAnswers();

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizDatas[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizDatas.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2> Test Completed, your score is ${score * 20} </h2>
                <button class='submit' onClick="location.reload()">TRY AGAIN</button>
            `;
        }
    }
})
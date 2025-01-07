const questions = {
    easy: [
        {
            question: "Which city was protected by Spider-Man?",
            options: ["New York", "Gotham", "Metropolis", "Central City"],
            answer: "New York"
        },
        {
            question: "What weapon was wielded by Thor?",
            options: ["Mjolnir", "Shield", "Bow and Arrow", "Lasso of Truth"],
            answer: "Mjolnir"
        },
        {
            question: "Which team was formed by Nick Fury?",
            options: ["The Avengers", "Justice League", "X-Men", "Fantastic Four"],
            answer: "The Avengers"
        },
        {
            question: "What metal was used to create Captain America's shield?",
            options: ["Vibranium", "Adamantium", "Steel", "Titanium"],
            answer: "Vibranium"
        },
        {
            question: "Which villain was defeated by the Avengers in their first movie?",
            options: ["Loki", "Thanos", "Ultron", "Red Skull"],
            answer: "Loki"
        }
    ],
    medium: [
        {
            question: "Which superhero was bitten by a radioactive spider?",
            options: ["Spider-Man", "Ant-Man", "Black Widow", "Wasp"],
            answer: "Spider-Man"
        },
        {
            question: "What phrase was made famous by Uncle Ben?",
            options: ["With great power comes great responsibility", "I am Iron Man", "I'm Batman", "It's clobberin' time"],
            answer: "With great power comes great responsibility"
        },
        {
            question: "Which city was protected by Batman?",
            options: ["Gotham", "Metropolis", "Star City", "Central City"],
            answer: "Gotham"
        },
        {
            question: "What substance was feared by Superman?",
            options: ["Kryptonite", "Vibranium", "Adamantium", "Nth Metal"],
            answer: "Kryptonite"
        },
        {
            question: "Which team was led by Professor Charles Xavier?",
            options: ["X-Men", "Avengers", "Fantastic Four", "Guardians of the Galaxy"],
            answer: "X-Men"
        }
    ],
    hard: [
        {
            question: "Which superhero was created by Bob Kane and Bill Finger?",
            options: ["Batman", "Superman", "Wonder Woman", "Flash"],
            answer: "Batman"
        },
        {
            question: "What metal was bonded to Wolverine's skeleton?",
            options: ["Adamantium", "Vibranium", "Promethium", "Nth Metal"],
            answer: "Adamantium"
        },
        {
            question: "Which reality was destroyed in the Flashpoint paradox?",
            options: ["DC Universe", "Marvel Universe", "Image Universe", "Valiant Universe"],
            answer: "DC Universe"
        },
        {
            question: "What organization was infiltrated by Hydra in Captain America: The Winter Soldier?",
            options: ["S.H.I.E.L.D.", "A.R.G.U.S.", "Checkmate", "S.W.O.R.D."],
            answer: "S.H.I.E.L.D."
        },
        {
            question: "Which superhero was trained by Stick in the Marvel Netflix series?",
            options: ["Daredevil", "Jessica Jones", "Luke Cage", "Iron Fist"],
            answer: "Daredevil"
        }
    ]
};

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;
let selectedDifficulty = '';

// Event listeners for difficulty selection
document.getElementById('easy').addEventListener('click', () => startGame('easy'));
document.getElementById('medium').addEventListener('click', () => startGame('medium'));
document.getElementById('hard').addEventListener('click', () => startGame('hard'));
document.getElementById('restart').addEventListener('click', restartGame);

function startGame(difficulty) {
    selectedDifficulty = difficulty;
    currentQuestion = 0;
    score = 0;
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    resetGameArea();
    loadQuestion();
}

function resetGameArea() {
    document.getElementById('game').innerHTML = `
        <h2 id="question"></h2>
        <div id="options"></div>
        <p id="feedback"></p>
        <p>Time left: <span id="time"></span></p>
    `;
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById('time').innerText = timeLeft;
    document.getElementById('feedback').innerText = '';

    if (currentQuestion < questions[selectedDifficulty].length) {
        const questionData = questions[selectedDifficulty][currentQuestion];
        document.getElementById('question').innerText = questionData.question;
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        questionData.options.forEach(option => {
            const button = document.createElement('div');
            button.classList.add('option');
            button.innerText = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });

        startTimer();
    } else {
        endGame();
    }
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const correctAnswer = questions[selectedDifficulty][currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('feedback').innerText = "Correct!";
    } else {
        document.getElementById('feedback').innerText = "Incorrect. The correct answer was: " + correctAnswer;
    }

    currentQuestion++;
    setTimeout(loadQuestion, 2000);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').innerText = "Time's up! The correct answer was: " + questions[selectedDifficulty][currentQuestion].answer;
            currentQuestion++;
            setTimeout(loadQuestion, 2000);
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    document.getElementById('game').innerHTML = `
        <h2>Game Over</h2>
        <p>Your score is: ${score} out of ${questions[selectedDifficulty].length}</p>
        <button id="play-again">Play Again</button>
        <button id="return-menu">Return to Menu</button>
    `;
    document.getElementById('play-again').addEventListener('click', () => startGame(selectedDifficulty));
    document.getElementById('return-menu').addEventListener('click', returnToMenu);
}

function restartGame() {
    returnToMenu();
}

function returnToMenu() {
    clearInterval(timer);
    currentQuestion = 0;
    score = 0;
    document.getElementById('difficulty-selection').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    document.getElementById('restart').style.display = 'none';
    resetGameArea();
}

const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-button');
const levelDisplay = document.getElementById('level');
const movesDisplay = document.getElementById('moves');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');

let level = 1;
let moves = 0;
let score = 0;
let timer;
let cards = [];
let flippedCards = [];
let matchedPairs = 0;

const levels = [
    { pairs: 6, time: 60 },
    { pairs: 8, time: 90 },
    { pairs: 10, time: 120 },
    { pairs: 12, time: 150 },
    { pairs: 15, time: 180 }
];

const emojis = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
    '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵'
];

function startGame() {
    resetGame();
    createCards();
    startTimer();
    startButton.disabled = true;
}

function resetGame() {
    gameBoard.innerHTML = '';
    moves = 0;
    score = 0;
    matchedPairs = 0;
    flippedCards = [];
    updateDisplay();
}

function createCards() {
    const currentLevel = levels[level - 1];
    cards = [];

    for (let i = 0; i < currentLevel.pairs; i++) {
        const emoji = emojis[i];
        cards.push(createCard(emoji), createCard(emoji));
    }

    shuffleArray(cards);

    cards.forEach(card => gameBoard.appendChild(card));
}

function createCard(emoji) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-front"></div>
        <div class="card-back">${emoji}</div>
    `;
    card.addEventListener('click', flipCard);
    return card;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            moves++;
            updateDisplay();
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.querySelector('.card-back').textContent === card2.querySelector('.card-back').textContent;

    setTimeout(() => {
        if (isMatch) {
            matchedPairs++;
            score += 10;
            card1.removeEventListener('click', flipCard);
            card2.removeEventListener('click', flipCard);
            checkLevelCompletion();
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            score = Math.max(0, score - 1);
        }
        flippedCards = [];
        updateDisplay();
    }, 1000);
}

function checkLevelCompletion() {
    if (matchedPairs === levels[level - 1].pairs) {
        clearInterval(timer);
        if (level < levels.length) {
            level++;
            setTimeout(() => {
                alert(`Level ${level - 1} Completado! Pasando al siguiente nivel.`);
                startGame();
            }, 1000);
        } else {
            setTimeout(() => {
                alert('Felicidades! Has completado todos los niveles.');
                startButton.disabled = false;
            }, 1000);
        }
    }
}

function startTimer() {
    let timeLeft = levels[level - 1].time;
    updateTimerDisplay(timeLeft);

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft === 0) {
            clearInterval(timer);
            alert('Time is up! Try again.');
            startButton.disabled = false;
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function updateDisplay() {
    levelDisplay.textContent = level;
    movesDisplay.textContent = moves;
    scoreDisplay.textContent = score;
}

startButton.addEventListener('click', startGame);
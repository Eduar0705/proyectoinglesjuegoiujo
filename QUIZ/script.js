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
        },
        {
            question: "What is the name of Batman's city?",
            options: ["Gotham", "Metropolis", "Star City", "Central City"],
            answer: "Gotham"
        },
        {
             question: "Who is the alter ego of the Green Lantern?",
             options: ["Hal Jordan", "Bruce Wayne", "Clark Kent", "Peter Parker"],
             answer: "Hal Jordan"
        },
        {
             question: "What is the name of the superhero team that includes Wolverine and Cyclops?",
             options: ["The Avengers", "Justice League", "X-Men", "Fantastic Four"],
             answer: "X-Men"
        },
        {
             question: "Which superhero can shrink in size and communicate with ants?",
             options: ["Ant-Man", "Spider-Man", "Hawkeye", "Iron Man"],
             answer: "Ant-Man"
        },
        {
             question: "What is the name of the Norse god who becomes a superhero?",
             options: ["Thor", "Loki", "Odin", "Hela"],
             answer: "Thor"
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
        },
        {
             question: "What is the name of Iron Man's AI assistant?",
             options: ["JARVIS", "FRIDAY", "ALFIE", "EDITH"],
             answer: "JARVIS"
        },
        {
             question: "Which superhero is known for his healing factor and claws?",
             options: ["Wolverine", "Deadpool", "Hawkeye", "Green Arrow"],
             answer: "Wolverine"
        },
        {
             question: "What is the name of the fictional African country where Black Panther is from?",
             options: ["Wakanda", "Genosha", "Latveria", "Krypton"],
             answer: "Wakanda"
        },
        {
             question: "Which superhero has a sidekick named Robin?",
             options: ["Batman", "Superman", "Aquaman", "Flash"],
             answer: "Batman"
        },
        {
             question: "What is the name of the cosmic entity that is the embodiment of death in the Marvel Universe?",
             options: ["Thanos", "Galactus", "Death", "Eternity"],
             answer: "Death"
        },
        {
             question: "What is the name of the organization that opposes the X-Men?",
             options: ["The Brotherhood of Evil Mutants", "The Avengers", "S.H.I.E.L.D.", "The Justice League"],
             answer: "The Brotherhood of Evil Mutants"
        },
        {
             question: "Which superhero is known for wielding a magic hammer called Mjolnir?",
             options: ["Thor", "Hulk", "Iron Man", "Captain America"],
             answer: "Thor"
        },
        {
             question: "What is the real name of the superhero known as the Flash?",
             options: ["Barry Allen", "Wally West", "Jay Garrick", "Hal Jordan"],
             answer: "Barry Allen"
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
        },
        {
             question: "What is the name of the Marvel Comics event that saw the destruction of the Multiverse?",
             options: ["Secret Wars", "Civil War", "House of M", "The Crisis on Infinite Earths"],
             answer: "Secret Wars"
        },
        {
             question: "Which DC Comics character is also known as the 'Fastest Man Alive'?",
             options: ["The Flash", "Green Lantern", "Aquaman", "Martian Manhunter"],
             answer: "The Flash"
        },
        {
             question: "What is the name of the Marvel Comics team that was formed by a group of mutants who were rejected by the X-Men?",
             options: ["The New Mutants", "The X-Factor", "The Brotherhood of Mutants", "The Hellions"],
             answer: "The New Mutants"
        },
        {
             question: "Which superhero was created by writer/artist Jim Lee and writer Scott Lobdell?",
             options: ["Wolverine", "Cable", "Deadpool", "WildC.A.T.S."],
             answer: "WildC.A.T.S."
        },
        {
             question: "What is the name of the DC Comics event that saw the reboot of the DC Universe?",
             options: ["The New 52", "The Crisis on Infinite Earths", "Zero Hour", "Infinite Crisis"],
             answer: "The New 52"
        },
        {
            "question": "What is the name of the villain who is the arch-nemesis of Spider-Man and has a green suit and a glider?",
            "options": ["Green Goblin", "Doctor Octopus", "Venom", "Mysterio"],
            "answer": "Green Goblin"
        },
        {
             question: "Which character is known as the 'Merc with a Mouth'?",
             options: ["Deadpool", "Wolverine", "Punisher", "Hawkeye"],
             answer: "Deadpool"
        },
        {
             question: "What is the name of the cosmic entity that judges the worthiness of beings in the Marvel Universe?",
             options: ["The Living Tribunal", "Galactus", "The Watcher", "The Beyonder"],
             answer: "The Living Tribunal"
        },
        {
             question: "Which superhero is known for his ability to manipulate time and is a member of the Justice League?",
             options: ["Doctor Fate", "Green Lantern", "Flash", "Aquaman"],
             answer: "Flash"
        },
        {
             question: "What is the name of the organization that is often opposed to the Avengers and is led by Norman Osborn?",
             options: ["The Thunderbolts", "The Sinister Six", "Hydra", "The Hand"],
             answer: "The Thunderbolts"
        }
    ]
};

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;
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
    playBackgroundMusic();
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
    timeLeft = 15;
    document.getElementById('time').innerText = timeLeft;
    document.getElementById('feedback').innerText = '';

    if (currentQuestion < questions[selectedDifficulty].length) {
        const questionData = questions[selectedDifficulty][currentQuestion];
        document.getElementById('question').innerText = questionData.question;
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        // Mezclar las opciones
        const shuffledOptions = shuffleArray([...questionData.options]);

        shuffledOptions.forEach(option => {
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const correctAnswer = questions[selectedDifficulty][currentQuestion].answer;
    const feedbackElement = document.getElementById('feedback');
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        if (option.innerText === selectedOption) {
            if (selectedOption === correctAnswer) {
                option.classList.add('option-correct');
                feedbackElement.innerText = "Correct!";
                feedbackElement.className = 'correct';
                score++;
            } else {
                option.classList.add('option-incorrect');
                feedbackElement.innerText = "Incorrect. The correct answer was: " + correctAnswer;
                feedbackElement.className = 'incorrect';
            }
        } else if (option.innerText === correctAnswer) {
            option.classList.add('option-correct');
        }
        option.style.pointerEvents = 'none'; // Deshabilita más clics en las opciones
    });

    currentQuestion++;
    setTimeout(() => {
        feedbackElement.className = '';
        loadQuestion();
    }, 2000);
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
    stopBackgroundMusic();

    const totalQuestions = questions[selectedDifficulty].length;
    const isWin = score > totalQuestions / 2; // Considera victoria si se acierta más de la mitad

    if (isWin) {
        playWinSound();
    } else {
        playLoseSound();
    }

    document.getElementById('game').innerHTML = `
        <h2>Game Over</h2>
        <p>Your score is: ${score} out of ${totalQuestions}</p>
        <p>${isWin ? 'Congratulations! You won!' : 'Better luck next time!'}</p>
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

function playBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.8; // Ajusta el volumen según sea necesario
    music.play();
}

function stopBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    music.pause();
    music.currentTime = 0;
}

function playWinSound() {
    const winSound = document.getElementById('winSound');
    winSound.play();
}

function playLoseSound() {
    const loseSound = document.getElementById('loseSound');
    loseSound.play();
}
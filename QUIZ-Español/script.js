const questions = {
    easy: [
        {
            question: "¿Qué ciudad fue protegida por Spider-Man?",
            options: ["Nueva York", "Gotham", "Metropolis", "Central City"],
            answer: "Nueva York"
        },
        {
            question: "¿Qué arma empuñaba Thor?",
            options: ["Mjolnir", "Escudo", "Arco y flecha", "Lazo de la verdad"],
            answer: "Mjolnir"
        },
        {
            question: "¿Qué equipo fue formado por Nick Fury?",
            options: ["Los Vengadores", "La Liga de la Justicia", "X-Men", "Los Cuatro Fantásticos"],
            answer: "Los Vengadores"
        },
        {
            question: "¿Qué metal se usó para crear el escudo del Capitán América?",
            options: ["Vibranium", "Adamantium", "Acero", "Titanio"],
            answer: "Vibranium"
        },
        {
            question: "¿Qué villano fue derrotado por los Vengadores en su primera película?",
            options: ["Loki", "Thanos", "Ultron", "Red Skull"],
            answer: "Loki"
        },
        {
            question: "¿Cuál es el nombre de la ciudad de Batman?",
            options: ["Gotham", "Metropolis", "Star City", "Central City"],
            answer: "Gotham"
        },
        {
            question: "¿Quién es el alter ego de Linterna Verde?",
            options: ["Hal Jordan", "Bruce Wayne", "Clark Kent", "Peter Parker"],
            answer: "Hal Jordan"
        },
        {
            question: "¿Cuál es el nombre del equipo de superhéroes que incluye a Wolverine y Cyclops?",
            options: ["Los Vengadores", "La Liga de la Justicia", "X-Men", "Los Cuatro Fantásticos"],
            answer: "X-Men"
        },
        {
            question: "¿Qué superhéroe puede encogerse y comunicarse con hormigas?",
            options: ["Ant-Man", "Spider-Man", "Hawkeye", "Iron Man"],
            answer: "Ant-Man"
        },
        {
            question: "¿Cuál es el nombre del dios nórdico que se convierte en superhéroe?",
            options: ["Thor", "Loki", "Odin", "Hela"],
            answer: "Thor"
        }
    ],
    medium: [
        {
            question: "¿Qué superhéroe fue mordido por una araña radiactiva?",
            options: ["Spider-Man", "Ant-Man", "Black Widow", "Wasp"],
            answer: "Spider-Man"
        },
        {
            question: "¿Qué frase fue hecha famosa por el Tío Ben?",
            options: ["Con gran poder viene una gran responsabilidad", "Yo soy Iron Man", "Soy Batman", "Es hora de golpear"],
            answer: "Con gran poder viene una gran responsabilidad"
        },
        {
            question: "¿Qué ciudad fue protegida por Batman?",
            options: ["Gotham", "Metropolis", "Star City", "Central City"],
            answer: "Gotham"
        },
        {
            question: "¿Qué sustancia era temida por Superman?",
            options: ["Kryptonita", "Vibranium", "Adamantium", "Nth Metal"],
            answer: "Kryptonita"
        },
        {
            question: "¿Qué equipo fue liderado por el Profesor Charles Xavier?",
            options: ["X-Men", "Avengers", "Fantastic Four", "Guardians of the Galaxy"],
            answer: "X-Men"
        },
        {
            question: "¿Cuál es el nombre del asistente de IA de Iron Man?",
            options: ["JARVIS", "FRIDAY", "ALFIE", "EDITH"],
            answer: "JARVIS"
        },
        {
            question: "¿Qué superhéroe es conocido por su factor de curación y garras?",
            options: ["Wolverine", "Deadpool", "Hawkeye", "Green Arrow"],
            answer: "Wolverine"
        },
        {
            question: "¿Cuál es el nombre del país africano ficticio del que es originario Black Panther?",
            options: ["Wakanda", "Genosha", "Latveria", "Krypton"],
            answer: "Wakanda"
        },
        {
            question: "¿Qué superhéroe tiene un compañero llamado Robin?",
            options: ["Batman", "Superman", "Aquaman", "Flash"],
            answer: "Batman"
        },
        {
            question: "¿Cuál es el nombre de la entidad cósmica que es la encarnación de la muerte en el Universo Marvel?",
            options: ["Thanos", "Galactus", "Death", "Eternity"],
            answer: "Death"
        },
        {
            question: "¿Cuál es el nombre de la organización que se opone a los X-Men?",
            options: ["La Hermandad de Mutantes Malvados", "Los Vengadores", "S.H.I.E.L.D.", "La Liga de la Justicia"],
            answer: "La Hermandad de Mutantes Malvados"
        },
        {
            question: "¿Qué superhéroe es conocido por empuñar un martillo mágico llamado Mjolnir?",
            options: ["Thor", "Hulk", "Iron Man", "Captain America"],
            answer: "Thor"
        },
        {
            question: "¿Cuál es el nombre real del superhéroe conocido como Flash?",
            options: ["Barry Allen", "Wally West", "Jay Garrick", "Hal Jordan"],
            answer: "Barry Allen"
        }
    ],
    hard: [
        {
            question: "¿Qué superhéroe fue creado por Bob Kane y Bill Finger?",
            options: ["Batman", "Superman", "Wonder Woman", "Flash"],
            answer: "Batman"
        },
        {
            question: "¿Qué metal fue unido al esqueleto de Wolverine?",
            options: ["Adamantium", "Vibranium", "Promethium", "Nth Metal"],
            answer: "Adamantium"
        },
        {
            question: "¿Qué realidad fue destruida en la paradoja de Flashpoint?",
            options: ["Universo DC", "Universo Marvel", "Universo Image", "Universo Valiant"],
            answer: "Universo DC"
        },
        {
            question: "¿Qué organización fue infiltrada por Hydra en Capitán América: El Soldado de Invierno?",
            options: ["S.H.I.E.L.D.", "A.R.G.U.S.", "Checkmate", "S.W.O.R.D."],
            answer: "S.H.I.E.L.D."
        },
        {
            question: "¿Qué superhéroe fue entrenado por Stick en la serie de Marvel de Netflix?",
            options: ["Daredevil", "Jessica Jones", "Luke Cage", "Iron Fist"],
            answer: "Daredevil"
        },
        {
            question: "¿Cuál es el nombre del evento de Marvel Comics que vio la destrucción del Multiverso?",
            options: ["Guerras Secretas", "Guerra Civil", "Casa de M", "La Crisis en Tierras Infinitas"],
            answer: "Guerras Secretas"
        },
        {
            question: "¿Qué personaje de DC Comics también es conocido como el 'Hombre Más Rápido Vivo'?",
            options: ["The Flash", "Linterna Verde", "Aquaman", "Martian Manhunter"],
            answer: "The Flash"
        },
        {
            question: "¿Cuál es el nombre del equipo de Marvel Comics que fue formado por un grupo de mutantes que fueron rechazados por los X-Men?",
            options: ["Los Nuevos Mutantes", "El Factor-X", "La Hermandad de Mutantes", "Los Hellions"],
            answer: "Los Nuevos Mutantes"
        },
        {
            question: "¿Qué superhéroe fue creado por el escritor/artista Jim Lee y el escritor Scott Lobdell?",
            options: ["Wolverine", "Cable", "Deadpool", "WildC.A.T.S."],
            answer: "WildC.A.T.S."
        },
        {
            question: "¿Cuál es el nombre del evento de DC Comics que vio el reinicio del Universo DC?",
            options: ["The New 52", "La Crisis en Tierras Infinitas", "Hora Cero", "Crisis Infinita"],
            answer: "The New 52"
        },
        {
            question: "¿Cuál es el nombre del villano que es el archienemigo de Spider-Man y tiene un traje verde y un planeador?",
            options: ["Duende Verde", "Doctor Octopus", "Venom", "Mysterio"],
            answer: "Duende Verde"
        },
        {
            question: "¿Qué personaje es conocido como el 'Mercenario con Boca'?",
            options: ["Deadpool", "Wolverine", "Punisher", "Hawkeye"],
            answer: "Deadpool"
        },
        {
            question: "¿Cuál es el nombre de la entidad cósmica que juzga la valía de los seres en el Universo Marvel?",
            options: ["El Tribunal Viviente", "Galactus", "El Vigilante", "El Más Allá"],
            answer: "El Tribunal Viviente"
        },
        {
            question: "¿Qué superhéroe es conocido por su habilidad para manipular el tiempo y es miembro de la Liga de la Justicia?",
            options: ["Doctor Fate", "Linterna Verde", "Flash", "Aquaman"],
            answer: "Flash"
        },
        {
            question: "¿Cuál es el nombre de la organización que a menudo se opone a los Vengadores y es liderada por Norman Osborn?",
            options: ["Los Thunderbolts", "Los Seis Siniestros", "Hydra", "La Mano"],
            answer: "Los Thunderbolts"
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
                feedbackElement.innerText = "Correcto!";
                feedbackElement.className = 'correct';
                score++;
            } else {
                option.classList.add('option-incorrect');
                feedbackElement.innerText = "Incorrecto. La respuesta correcta era: " + correctAnswer;
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
            document.getElementById('feedback').innerText = "Se acabó el tiempo! La respuesta correcta era: " + questions[selectedDifficulty][currentQuestion].answer;
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
        <h2>Fin del Juego</h2>
        <p>Tu puntuación es: ${score} de ${totalQuestions}</p>
        <p>${isWin ? 'Felicidades! Ganaste!' : 'Mejor suerte la próxima vez!'}</p>
        <button id="play-again">Jugar de nuevo</button>
        <button id="return-menu">Regresar al Menú</button>
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
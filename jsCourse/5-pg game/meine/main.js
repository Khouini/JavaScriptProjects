'use strict';
// Initializing
let currentscore, currentPlayer, playing, x, b;
// Functions
function declaration() {
    const newScore1 = document.getElementById('newScore1');
    const currentScore1 = document.getElementById('currentScore1');
    const newGame = document.getElementById('newGame');
    const dice = document.getElementById('dice');
    const roll = document.getElementById('roll');
    const hold = document.getElementById('hold');
    const newScore2 = document.getElementById('newScore2');
    const currentScore2 = document.getElementById('currentScore2');
    const p1 = document.getElementById(`p1`);
    const p2 = document.getElementById(`p2`);
}

function resetGame() {
    x = 0;
    b = 0;
    newScore1.textContent = 0;
    newScore2.textContent = 0;
    currentscore = 0
    currentPlayer = 1;
    document.getElementById(`currentScore${currentPlayer}`).textContent = currentscore;
    playing = true;
    p1.classList.remove('bg-dark');
    p1.classList.remove('bg-info');
    p1.classList.add('bg-secondary');
    p2.classList.remove('bg-dark');
    p2.classList.add('bg-info');
    p2.classList.remove('bg-secondary');
    dice.classList.add('hidden');
}

function checkWinner() {
    if (newScore1.textContent > 20) {
        console.log(`Player ${currentPlayer} wins`);
        document.getElementById(`p${currentPlayer}`).classList.remove('bg-info');
        document.getElementById(`p${currentPlayer}`).classList.remove('bg-secondary');
        document.getElementById(`p${currentPlayer}`).classList.add('bg-dark');
        playing = false;
        dice.classList.add('hidden');
    } else if (newScore2.textContent > 20) {
        console.log(`Player ${currentPlayer} wins`);
        document.getElementById(`p${currentPlayer}`).classList.remove('bg-info');
        document.getElementById(`p${currentPlayer}`).classList.remove('bg-secondary');
        document.getElementById(`p${currentPlayer}`).classList.add('bg-dark');
        playing = false;
        dice.classList.add('hidden');
    }
}

function switchPlayer() {
    currentscore = 0;
    document.getElementById(`p${currentPlayer}`).classList.remove('bg-secondary');
    document.getElementById(`p${currentPlayer}`).classList.add('bg-info');

    document.getElementById(`currentScore${currentPlayer}`).textContent = currentscore;
    currentPlayer = ((currentPlayer === 1) ? 2 : 1);
    console.log(`SWITCH !!!The current player is ${currentPlayer}`);
    document.getElementById(`p${currentPlayer}`).classList.remove('bg-info');
    document.getElementById(`p${currentPlayer}`).classList.add('bg-secondary');
}

function rollDice() {
    if (playing) {
        let RandomNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(RandomNumber);
        let nbDice = RandomNumber;
        dice.classList.remove('hidden');
        dice.src = `dice-${nbDice}.png`;
        if (nbDice === 1) {
            switchPlayer();
        } else {
            // Add dice roll to current score
            currentscore += nbDice;
            document.getElementById(`currentScore${currentPlayer}`).textContent = currentscore;
        }
    }
}

function holdScore() {
    if (playing) {
        if (currentPlayer === 1) {
            x = x + currentscore;
            document.getElementById(`newScore${currentPlayer}`).textContent = x;
        } else {
            b = b + currentscore;
            document.getElementById(`newScore${currentPlayer}`).textContent = b;
        }
        if ((x >= 20) || (b >= 20)) {
            checkWinner();
        } else {
            switchPlayer();
        }
    }
}
// main 
declaration();
resetGame();
roll.addEventListener('click', rollDice);
hold.addEventListener('click', holdScore);
newGame.addEventListener('click', resetGame);
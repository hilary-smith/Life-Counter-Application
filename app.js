//Life Counter Application

//Selecting the elements
const p1Name = document.querySelector('#p1Name');
const p2Name = document.querySelector('#p2Name');
const p3Name = document.querySelector('#p3Name');
const p4Name = document.querySelector('#p4Name');
const p1Add = document.querySelector('#p1Add');
const p2Add = document.querySelector('#p2Add');
const p3Add = document.querySelector('#p3Add');
const p4Add = document.querySelector('#p4Add');
const p1Remove = document.querySelector('#p1Remove');
const p2Remove = document.querySelector('#p2Remove');
const p3Remove = document.querySelector('#p3Remove');
const p4Remove = document.querySelector('#p4Remove');
const p1ScoreDisplay = document.querySelector('#p1Score');
const p2ScoreDisplay = document.querySelector('#p2Score');
const p3ScoreDisplay = document.querySelector('#p3Score');
const p4ScoreDisplay = document.querySelector('#p4Score');
let p1Score = 40;
let p2Score = 40;
let p3Score = 40;
let p4Score = 40;

window.addEventListener('load', function (e) {
    p1ScoreDisplay.textContent = 40;
    p2ScoreDisplay.textContent = 40;
    p3ScoreDisplay.textContent = 40;
    p4ScoreDisplay.textContent = 40;
});

const reset = document.querySelector('#reset');

//P1 Logic
p1Remove.addEventListener('click', function (e) {
    e.preventDefault();
    if (p1Score > 1) {
        p1Score -= 1;
        p1ScoreDisplay.textContent = p1Score;
        console.log('Player 1 lost a life.');
    } else if (p1Score === 1) {
        p1Score = 0;
        p1ScoreDisplay.textContent = p1Score;
        alert('Player 1 is dead!');
        console.log('Player 1 has 0 life and lost the game.');
    } else {
        alert('Player 1 is already dead!');
        console.log('Error: Player 1 life total is already at 0.');
    }
});
p1Add.addEventListener('click', function (e) {
    e.preventDefault();
    p1Score += 1;
    p1ScoreDisplay.textContent = p1Score;
    console.log('Player 1 gained a life.');
});
//P2 Logic
p2Remove.addEventListener('click', function (e) {
    e.preventDefault();
    if (p2Score > 1) {
        p2Score -= 1;
        p2ScoreDisplay.textContent = p2Score;
        console.log('Player 2 lost a life.');
    } else if (p2Score === 1) {
        p2Score = 0;
        p2ScoreDisplay.textContent = p2Score;
        alert('Player 2 is dead!');
        console.log('Player 2 has 0 life and lost the game.');
    } else {
        alert('Player 2 is already dead!');
        console.log('Error: Player 2 life total is already at 0.');
    }
});
p2Add.addEventListener('click', function (e) {
    e.preventDefault();
    p2Score += 1;
    p2ScoreDisplay.textContent = p2Score;
    console.log('Player 2 gained a life.');
});
//P3 Logic
p3Remove.addEventListener('click', function (e) {
    e.preventDefault();
    if (p3Score > 1) {
        p3Score -= 1;
        p3ScoreDisplay.textContent = p3Score;
        console.log('Player 3 lost a life.');
    } else if (p3Score === 1) {
        p3Score = 0;
        p3ScoreDisplay.textContent = p3Score;
        alert('Player 3 is dead!');
        console.log('Player 3 has 0 life and lost the game.');
    } else {
        alert('Player 3 is already dead!');
        console.log('Error: Player 3 life total is already at 0.');
    }
});
p3Add.addEventListener('click', function (e) {
    e.preventDefault();
    p3Score += 1;
    p3ScoreDisplay.textContent = p3Score;
    console.log('Player 3 gained a life.');
});
//P4 Logic
p4Remove.addEventListener('click', function (e) {
    e.preventDefault();
    if (p4Score > 1) {
        p4Score -= 1;
        p4ScoreDisplay.textContent = p4Score;
        console.log('Player 4 lost a life.');
    } else if (p4Score === 1) {
        p4Score = 0;
        p4ScoreDisplay.textContent = p1Score;
        alert('Player 4 is dead!');
        console.log('Player 4 has 0 life and lost the game.');
    } else {
        alert('Player 4 is already dead!');
        console.log('Error: Player 4 life total is already at 0.');
    }
});
p4Add.addEventListener('click', function (e) {
    e.preventDefault();
    p4Score += 1;
    p4ScoreDisplay.textContent = p4Score;
    console.log('Player 4 gained a life.');
});
//Reset
reset.addEventListener('click', function (e) {
    p1Score = 40;
    p2Score = 40;
    p3Score = 40;
    p4Score = 40;
    p1ScoreDisplay.textContent = 40;
    p2ScoreDisplay.textContent = 40;
    p3ScoreDisplay.textContent = 40;
    p4ScoreDisplay.textContent = 40;
});
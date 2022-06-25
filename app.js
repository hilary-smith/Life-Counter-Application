//Life Counter Application

//setting up our constants
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
const p1Color = document.querySelector('#p1Color');
const p2Color = document.querySelector('#p2Color');
const p3Color = document.querySelector('#p3Color');
const p4Color = document.querySelector('#p4Color');
const p1ScoreDisplay = document.querySelector('#p1Score');
const p2ScoreDisplay = document.querySelector('#p2Score');
const p3ScoreDisplay = document.querySelector('#p3Score');
const p4ScoreDisplay = document.querySelector('#p4Score');
let p1Score = 40;
let p2Score = 40;
let p3Score = 40;
let p4Score = 40;
const resetButton = document.querySelector('reset');

//P1 Logic
p1Remove.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 40; i > 0; i--) {
        p1Num += (p1Num - 1);
    } return;
    console.log('Player 1 is already dead.');
});
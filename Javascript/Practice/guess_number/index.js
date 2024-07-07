"use strict";
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "🔥FIRE";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 13;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 24;
*/

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When ther is no input
    if(!guess){
        document.querySelector('.message').textContent = "No number!";

    // When player wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = "😍Correct Number!";

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
    } else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Too high";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

    // When guess is too low 
    } else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
})
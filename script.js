'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number🎉';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretnumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);
  if (!guess) {
    displayMessage('Not a number ⛔');
  } else if (guess === secretnumber) {
    displayMessage('Correct number🎉');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // REFACTORED  REFACTORING THE ORIGINAL CODE
    //WHEN GUESS IS WRONG
  } else if (guess !== secretnumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretnumber ? 'Too High!📈' : 'Too Low!📉');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('GAME LOST!');
    }
  }
  //OLD-CODE - NEEDS-REFACTORING

  //WHEN GUESS IT TOO HIGH
  // } else if (guess > secretnumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too High!📈';
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = 'GAME LOST!';
  //   }
  //   // WHEN GUESS IS TOO LOW
  // } else if (guess < secretnumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too Low!📉';
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = 'GAME LOST!';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretnumber);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  //Start guessing...
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

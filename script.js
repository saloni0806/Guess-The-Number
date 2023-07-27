'use strict';
let score = 20;
let scoreee = 0;
let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));

document.querySelector('.check').addEventListener('click', function () {
  const g = Number(document.querySelector('.guess').value);

  if (!g) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (g < secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = 'You Loose!';
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
      s;
    }
  } else if (g > secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = 'You Loose!';
    }
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (g === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    scoreee = score;

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.highscore').textContent = scoreee;

  score = 20;

  document.querySelector('.score').textContent = 20;

  document.querySelector('.message').textContent = 'Start guessing..';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  secretNumber = Number(Math.trunc(Math.random() * 20 + 1));

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

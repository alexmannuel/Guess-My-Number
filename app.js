'use strict';

var num;
var guess = Number(document.querySelector('.guess').value);
const btn = document.querySelector('.check');
var scoreNum = document.querySelector('.score').textContent;
var message = document.querySelector('.message').textContent;

window.onload = function () {
  num = generateNumber();
};

//Again btn
document.querySelector('.again').addEventListener('click', function () {
  num = generateNumber();
  const number = (document.querySelector('.number').textContent = '?');
  guess = Number((document.querySelector('.guess').value = 0));
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = message;
  btn.classList.remove('disable');
  btn.classList.add('btn');
  btn.disabled = false;
  document.body.style.backgroundColor = '#222';
});
//Check btn
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'You need to enter a number',
    });
  }
  numChange(guess);
  logicGame(guess);
});

const numChange = function (number) {
  const num = (document.querySelector('.number').textContent = number);
  return num;
};
//Func for generateNumber
const generateNumber = function () {
  const numberWins = Math.trunc(Math.random() * 19 + 1);
  if (numberWins == 0) {
    numberWins++;
  }
  console.log(numberWins);
  return numberWins;
};

//Func with the logic of the game
const logicGame = function (number) {
  let scoreNum = document.querySelector('.score').textContent;
  let highScore = parseInt(
    document.querySelector('.highscore').textContent,
    10
  );
  if (number === num) {
    document.querySelector('.message').textContent = '🎉You win!!';
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You found the number!',
      showConfirmButton: false,
      timer: 2500,
    });
    document.body.style.backgroundColor = '#60b347';
    btn.classList.add('disable');
    btn.disabled = true;

    if (highScore > parseInt(scoreNum, 10)) {
      let tempScore = highScore;
      document.querySelector('.highscore').textContent = tempScore;
    } else if (highScore < parseInt(scoreNum, 10)) {
      let tempScore = parseInt(scoreNum, 10);
      document.querySelector('.highscore').textContent = tempScore;
      tempScore = 0;
    }
  } else if (number > num) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'To Hight!!',
      showConfirmButton: false,
      timer: 2500,
    });
    scoreNum = document.querySelector('.score').textContent -= 1;
  } else if (number < num) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'To low!!',
      showConfirmButton: false,
      timer: 2500,
    });
    scoreNum = document.querySelector('.score').textContent -= 1;
  }

  if (scoreNum == 0) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'You loose!!',
      showConfirmButton: false,
      timer: 2500,
    });
    btn.classList.add('disable');
    btn.disabled = true;
  }
};

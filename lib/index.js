import Game from './Game.js';

const resetButton = document.querySelector('.reset');
const scoreBoard = document.getElementById('score');
const lives = document.getElementById('lives');
const canvas = document.getElementById('frogger-canvas');
const ctx = canvas.getContext('2d');
const logImg = new Image();
const frogImg = new Image();
const carImg = new Image();
const truckImg = new Image();

frogImg.src = '../img/frogger.png';
logImg.src = '../img/log.png';
carImg.src = '../img/yellow-car.png';
truckImg.src = '../img/large-truck.png';

const game = new Game(frogImg, logImg, carImg, truckImg);
const { frog, logs } = game;

const gameLoop = () => {
  if (game.gameActive) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frog.jumpOnLog(logs);
    frog.drift(logs);
    game.background(ctx);
    game.drawLogs(ctx);
    game.drawVehicles(ctx);
    frog.draw(ctx);
    game.helpers();
    game.vehicleHitFrog();
    updateDom(game.wins, scoreBoard);
    updateDom(game.lives, lives);
    requestAnimationFrame(gameLoop);
  } else {
    cancelAnimationFrame(gameLoop);
    gameOver();
  }
};

const gameOver = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'orange';
  ctx.font = '50px Times New Roman';
  ctx.fillText('Game Over', 190, 350);
  ctx.font = '30px Times New Roman';
  ctx.fillText('New Game Starts in Two Seconds ', 110, 400);
  setTimeout(() => {
    location.reload();
  }, 2000);
};

const updateDom = (value, domElement) => {
  return domElement.innerText = value;
};

resetButton.addEventListener('click', () => {
  window.location.reload(true);
});

document.addEventListener('keyup', e => {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  frog.move(allowedKeys[e.keyCode]);
});

window.requestAnimationFrame(gameLoop);
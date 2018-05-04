const Frogger = require('./Frogger');
const Game = require('./Game.js');
const Auto = require('./Auto.js');

const canvas = document.getElementById('frogger-canvas');
const ctx = canvas.getContext('2d');


const frog = new Frogger(275, 650, 50, 50);
const game = new Game();
const cars = game.generateAutos();

// const randomNumber = function getRandomWholeNumber(min, max) {
//   min = Math.ceil(1);
//   max = Math.floor(4);
// return Math.floor(Math.random() * (max - min + 1)) + min;
// };

const randomNumber = (function getRandomWholeNumber(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min + 1)) + min;
})();

const background = () => {
  //blue water section of DOOOOOM!
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(0, 0, 600, 350);

  // green grass, safe zones.
  ctx.fillStyle = 'rgba(46, 204, 113, 1)';
  ctx.fillRect(0, 350, 600, 50);
  ctx.fillRect(0, 650, 600, 50);
  ctx.fillRect(75, 0, 100, 50);
  ctx.fillRect(250, 0, 100, 50);
  ctx.fillRect(425, 0, 100, 50);

  //road lanes divided by white lines, lines listed
  //from top to bottom.
  //line 1
  ctx.beginPath();
  ctx.moveTo(0, 450);
  ctx.lineTo(600, 450);
  ctx.strokeStyle = 'rgba(225, 225, 225, 1)';
  ctx.setLineDash([5, 15, 20]);
  ctx.lineWidth = 2;
  ctx.stroke();

  //line 2
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.lineTo(600, 500);
  ctx.strokeStyle = 'rgba(225, 225, 225, 1)';
  ctx.setLineDash([10, 15]);
  ctx.lineWidth = 2;
  ctx.stroke();

  //line 3
  ctx.beginPath();
  ctx.moveTo(0, 550);
  ctx.lineTo(600, 550);
  ctx.strokeStyle = 'rgba(225, 225, 225, 1)';
  ctx.setLineDash([15]);
  ctx.lineWidth = 2;
  ctx.stroke();

  //line 4
  ctx.beginPath();
  ctx.moveTo(0, 600);
  ctx.lineTo(600, 600);
  ctx.strokeStyle = 'rgba(225, 225, 225, 1)';
  ctx.setLineDash([10]);
  ctx.lineWidth = 2;
  ctx.stroke();
};

function drawFrogger() {
  const img = new Image();

  img.src = '../img/frogger.png';
  ctx.drawImage(img, frog.x, frog.y, frog.width, frog.height);
}

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background();
  drawFrogger();
  cars.forEach(function (cars) {
    // getRandomWholeNumber();------------- must make work
    cars.move(randomNumber).draw(ctx);
  });
  requestAnimationFrame(gameLoop);
};

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



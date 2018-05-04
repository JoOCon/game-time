const Frogger = require('./Frogger.js');
const Log = require('./Log.js');
const Auto = require('./Auto.js');

const canvas = document.getElementById('frogger-canvas');
const ctx = canvas.getContext('2d');

const img = new Image();

img.src = '../img/frogger.png';
const frog = new Frogger(img, 275, 650, 50, 50);

var car1 = new Auto(0, 605, 100, 40, null);
var car2 = new Auto(0, 555, 100, 40, null);
var car3 = new Auto(0, 505, 100, 40, null);
var car4 = new Auto(0, 455, 100, 40, null);
var car5 = new Auto(0, 405, 100, 40, null);

var cars = [car1, car2, car3, car4, car5];


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
  frog.draw(ctx);
  // ctx.drawImage(img, frog.x, frog.y, frog.width, frog.height);
}

function drawLogs() {
  const img = new Image();
  const log1 = new Log(img, 0, 298, 225, 52);
  const log2 = new Log(img, 100, 248, 225, 52);
  const log3 = new Log(img, 50, 198, 225, 52);
  const log4 = new Log(img, 250, 148, 225, 52);
  const log5 = new Log(img, 300, 98, 225, 52);
  const log6 = new Log(img, 280, 48, 225, 52);
  const logs = [log1, log2, log3, log4, log5, log6];

  img.src = '../img/log.png';

  logs.forEach(log => {
    log.draw(ctx);
  });
}

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background();
  drawLogs();
  cars.forEach(function (cars) {
    cars.move().draw(ctx);
  });
  drawFrogger();
  requestAnimationFrame(gameLoop);
};

document.addEventListener('keyup', e => {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
  };

  frog.move(allowedKeys[e.keyCode]);
});

window.requestAnimationFrame(gameLoop);
const canvas = document.getElementById('frogger-canvas');
const ctx = canvas.getContext('2d');
// const Auto = require('./Auto.js');
const Game = require('./Game.js');

const game = new Game();
const cars = game.generateAutos();

const background = () => {
  //blue water section of DOOOOOM!
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(0, 0, 600, 350);

  // green grass, safe zones.
  ctx.fillStyle = 'rgba(0, 153, 51, 1)';
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

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  background();


  cars.forEach(function (cars) {
    cars.move().draw(ctx);
  });


  requestAnimationFrame(gameLoop);
};




window.requestAnimationFrame(gameLoop);

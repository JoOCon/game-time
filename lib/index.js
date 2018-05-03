const Frogger = require('./Frogger');

const canvas = document.getElementById('frogger-canvas');
const ctx = canvas.getContext('2d');
const frog = new Frogger(275, 650, 50, 50);

const background = () => {
  //blue water section of DOOOOOM!
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 600, 350);

  // green grass, safe zones.
  ctx.fillStyle = 'rgba(46, 204, 113,1.0)';
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
  ctx.strokeStyle = 'white';
  ctx.setLineDash([5, 15, 20]);
  ctx.lineWidth = 2;
  ctx.stroke();

  //line 2
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.lineTo(600, 500);
  ctx.strokeStyle = 'white';
  ctx.setLineDash([10, 15]);
  ctx.lineWidth = 2;
  ctx.stroke();

  //line 3
  ctx.beginPath();
  ctx.moveTo(0, 550);
  ctx.lineTo(600, 550);
  ctx.strokeStyle = 'white';
  ctx.setLineDash([15]);
  ctx.lineWidth = 2;
  ctx.stroke();

  //line 4
  ctx.beginPath();
  ctx.moveTo(0, 600);
  ctx.lineTo(600, 600);
  ctx.strokeStyle = 'white';
  ctx.setLineDash([10]);
  ctx.lineWidth = 2;
  ctx.stroke();
  requestAnimationFrame(background);
}

function drawFrogger() {
  const img = new Image();

  img.src = '../img/frogger.png';
  ctx.drawImage(img, frog.x, frog.y, frog.width, frog.height);
}

const gameLoop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  background();
  drawFrogger();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keyup', e => {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  frog.move(allowedKeys[e.keyCode]);
});

window.requestAnimationFrame(gameLoop);

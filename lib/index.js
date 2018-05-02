const canvas = document.getElementById('frogger-canvas');
const ctx = canvas.getContext('2d');

function background() {
  //blue water section of DOOOOOM!
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 600, 350);

  // green grass, safe zones.
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 350, 600, 50);
  ctx.fillRect(0, 650, 600, 50);
  ctx.fillRect(75, 0, 100, 50);
  ctx.fillRect(250, 0, 100, 50);
  ctx.fillRect(425, 0, 100, 50);

  //road lanes devided by white lines, lines listed
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

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background();
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);

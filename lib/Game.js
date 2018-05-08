import Auto from './Auto.js';
import Log from './Log.js';
import Frogger from './Frogger.js';

class Game {
  constructor(frogImg, logImg, carImg, truckImg) {
    this.lives = 3;
    this.gameActive = true;
    this.level = 0;
    this.wins = 0;
    this.frogImg = frogImg;
    this.logImg = logImg;
    this.carImg = carImg;
    this.truckImg = truckImg;
    this.frog = this.generateFrog();
    this.logs = this.generateLogs();
    this.vehicles = this.generateAutos();
  }

  generateFrog() {
    const frog = new Frogger(this.frogImg, 275, 650, 40, 50);
    return frog;
  }

  generateLogs() {
    const log1 = new Log(this.logImg, -150, 298, 250, 52, 1.5, 'right');
    const log2 = new Log(this.logImg, 550, 248, 250, 52, 2, 'left');
    const log3 = new Log(this.logImg, -150, 198, 250, 52, .5, 'right');
    const log4 = new Log(this.logImg, 550, 148, 250, 52, 1.5, 'left');
    const log5 = new Log(this.logImg, -150, 98, 250, 52, 1, 'right');
    const log6 = new Log(this.logImg, 550, 48, 250, 52, 1, 'left');
    const logs = [log1, log2, log3, log4, log5, log6];
    return logs;
  }

  generateAutos() {
    const car1 = new Auto(this.carImg, 0, 605, 80, 40, 4);
    const car2 = new Auto(this.carImg, 100, 605, 80, 40, 4);
    const car3 = new Auto(this.carImg, 100, 505, 80, 40, 2);
    const car4 = new Auto(this.carImg, 200, 505, 80, 40, 2);
    const car5 = new Auto(this.carImg, 300, 505, 80, 40, 2);
    const car6 = new Auto(this.carImg, 0, 405, 80, 40, 3);
    const car7 = new Auto(this.carImg, 350, 405, 80, 40, 3);
    const truck1 = new Auto(this.truckImg, 0, 555, 120, 40, -2);
    const truck2 = new Auto(this.truckImg, 300, 555, 120, 40, -2);
    const truck3 = new Auto(this.truckImg, 100, 455, 120, 40, -3);
    const vehicles = [car1, car2, car3, car4, car5, car6, car7, truck1,
      truck2, truck3];
    return vehicles;
  }

  drawLogs(ctx) {
    this.logs.forEach(log => {
      log.move().draw(ctx);
    });
  }

  drawVehicles(ctx) {
    this.vehicles.forEach(vehicle => {
      vehicle.move().draw(ctx);
    });
  }

  vehicleHitFrog() {
    this.vehicles.forEach(vehicle => {
      if (vehicle.x < this.frog.x + this.frog.width && vehicle.x +
        vehicle.width > this.frog.x && vehicle.y < this.frog.y +
        this.frog.height && vehicle.height + vehicle.y > this.frog.y) {
        this.lives--;
        this.reset();
      }
    });
  }

  background(ctx) {
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
    //road lanes divided by white lines
    //line 1
    ctx.beginPath();
    ctx.moveTo(0, 450);
    ctx.lineTo(600, 450);
    ctx.strokeStyle = 'rgba(225, 225, 225, 1)';
    ctx.setLineDash([15]);
    ctx.lineWidth = 2;
    ctx.stroke();
    //line 2
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(600, 500);
    ctx.strokeStyle = 'rgba(225, 225, 225, 1)';
    ctx.setLineDash([15]);
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
    ctx.setLineDash([15]);
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  drown() {
    if (this.frog.y < 350 && !this.frog.y < 40 && !this.frog.floating) {
      this.lives--;
      this.reset();
    }
  }

  outOfBounds() {
    if (this.frog.x > 550 || this.frog.x < 0) {
      this.lives--;
      this.reset();
    }
  }

  reset() {
    this.frog.x = 275;
    this.frog.y = 650;
  }

  hasMadeItToLillyPad() {
    if (this.frog.y < 49 && this.frog.x >= 75 && this.frog.x <= 175 ||
      this.frog.y < 49 && this.frog.x >= 250 && this.frog.x <= 350 ||
      this.frog.y < 49 && this.frog.x >= 425 && this.frog.x <= 525) {
      this.wins++;
      this.reset();
    }
  }

  gameOver() {
    if (this.lives < 1) {
      this.gameActive = false;
    }
  }

  helpers() {
    this.drown();
    this.outOfBounds();
    this.hasMadeItToLillyPad();
    this.gameOver();
  }
}

export default Game;





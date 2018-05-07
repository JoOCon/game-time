import Auto from './Auto.js';
import Log from './Log.js';
import Frogger from './Frogger.js';

class Game {
  constructor(frogImg, logImg, carImg, truckImg) {
    this.lives = 3;
    this.gameActive = true;
    this.level = 0;
    this.frogImg = frogImg;
    this.logImg = logImg;
    this.carImg = carImg;
    this.truckImg = truckImg;
    this.frog = this.generateFrog(this.frogImg);
    this.logs = this.generateLogs(this.logImg);
  }

  generateFrog() {
    const frog = new Frogger(this.frogImg, 275, 650, 50, 50);
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
    const car1 = new Auto(this.carImg, 0, 605, 80, 40, 2);
    const car2 = new Auto(this.carImg, 100, 605, 80, 40, 2);
    const car3 = new Auto(this.carImg, 100, 505, 80, 40, 2);
    const car4 = new Auto(this.carImg, 200, 505, 80, 40, 2);
    const car5 = new Auto(this.carImg, 300, 505, 80, 40, 2);
    const car6 = new Auto(this.carImg, 0, 405, 80, 40, 2);
    const car7 = new Auto(this.carImg, 300, 405, 80, 40, 2);
    const truck1 = new Auto(this.truckImg, 0, 555, 120, 40, 2);
    const truck2 = new Auto(this.truckImg, 300, 555, 120, 40, 2);
    const truck3 = new Auto(this.truckImg, 150, 455, 120, 40, 2);
    const vehicles = [car1, car2, car3, car4, car5, car6, car7, truck1, 
      truck2, truck3];
    return vehicles;
  }
}

export default Game;





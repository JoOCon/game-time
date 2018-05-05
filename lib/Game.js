const Auto = require('./Auto.js');
const Frogger = require('./Frogger');
const Log = require('./Log.js');

class Game {
  constructor(frogImg, logImg) {
    this.lives = 3;
    this.gameActive = true;
    this.level = 0;
    this.frogImg = frogImg;
    this.logImg = logImg;
  }

  generateFrog() {
    const frog = new Frogger(this.frogImg, 275, 650, 50, 50);
    return frog;
  }

  generateLogs() {
    const log1 = new Log(this.logImg, -150, 298, 225, 52);
    const log2 = new Log(this.logImg, 550, 248, 225, 52);
    const log3 = new Log(this.logImg, -150, 198, 225, 52);
    const log4 = new Log(this.logImg, 550, 148, 225, 52);
    const log5 = new Log(this.logImg, -150, 98, 225, 52);
    const log6 = new Log(this.logImg, 550, 48, 225, 52);
    const logs = [log1, log2, log3, log4, log5, log6];
    return logs;
  }

  generateAutos() {
    const autoImg = new Image();
    autoImg.src = '../img/yellow-car.png';

    var car1 = new Auto(autoImg, 0, 605, 100, 40);
    var car2 = new Auto(autoImg, 0, 555, 100, 40);
    var car3 = new Auto(autoImg, 0, 505, 100, 40);
    var car4 = new Auto(autoImg, 0, 455, 100, 40);
    var car5 = new Auto(autoImg, 0, 405, 100, 40);
    var cars = [car1, car2, car3, car4, car5];
    return cars;
  }
}

module.exports = Game;
const Auto = require('./Auto.js');

class Game {
  constructor() {
    this.lives = 3;
    this.gameActive = true;
    this.level = 0;
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
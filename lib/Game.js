const Auto = require('./Auto.js');

class Game {
  constructor() {
    this.lives = 3;
    this.gameActive = true;
    this.level = 0;
  }

  generateAutos() {
    var car1 = new Auto(0, 605, 100, 40, null, 'rgba(87, 95, 207, 1.0)');
    var car2 = new Auto(0, 555, 100, 40, null, 'rgba(255, 94, 87, 1.0)');
    var car3 = new Auto(0, 505, 100, 40, null, 'rgba(0, 216, 214, 1.0)');
    var car4 = new Auto(0, 455, 100, 40, null, 'rgba(5, 196, 107, 1.0)');
    var car5 = new Auto(0, 405, 100, 40, null, 'rgba(255, 192, 72, 1.0)');

    var cars = [car1, car2, car3, car4, car5];
    return cars;
  }
}

module.exports = Game;
const Character = require('./Character.js');

class Auto extends Character {
  constructor( img, x, y, width, height) {
    super(img, x, y, width, height);
  }

  move(randomNumber) {
    if(this.x < 600) {
      this.x += randomNumber;
    } else {
      this.x = 0;
    }
    console.log(randomNumber);
    return this;
  }
}

module.exports = Auto;
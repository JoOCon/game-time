const Character = require('./Character.js');

class Frogger extends Character {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
  }

  move(direction) {
    if (direction === 'up' && this.y > 0) {
      this.y -= 50;
    } else if (direction === 'left' && this.x > 70) {
      this.x -= 68;
    } else if (direction === 'right' && this.x < 500) {
      this.x += 68;
    } else if (direction === 'down' && this.y < 700) {
      this.y += 50;
    }
  }
}

module.exports = Frogger;
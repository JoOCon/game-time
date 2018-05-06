const Character = require('./Character.js');

class Log extends Character {
  constructor(img, x, y, width, height, speed, direction) {
    super(img, x, y, width, height);
    this.speed = speed;
    this.direction = direction;
  }

  move() {
    this.x += this.direction === 'right' ? this.speed : (this.speed * -1);
    if (this.direction === 'left') {
      if (this.x < -225) {
        this.x = 600;
      }
    } else {
      if (this.x > 600) {
        this.x = -220;
      }
    }
    return this;
  }
}

module.exports = Log;
import Character from './Character.js';

class Log extends Character {
  constructor(img, x, y, width, height, speed, direction) {
    super(img, x, y, width, height);
    this.speed = speed;
    this.direction = direction;
  }

  move() {
    if (this.direction === 'right') {
      this.x += this.speed;
    } else {
      this.x += this.speed * -1;
    }

    if (this.direction === 'left') {
      if (this.x < -230) {
        this.x = 600;
      }
    } else {
      if (this.x > 600) {
        this.x = -230;
      }
    }
    return this;
  }
}

export default Log;
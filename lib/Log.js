import Character from './Character.js';

class Log extends Character {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
  }

  move(xDirection) {
    if (this.x < -225) {
      this.x = 600;
    } else if (this.x > 600) {
      this.x = -220;
    }
    this.x -= xDirection;
    return this;
  }
}

export default Log;
import Character from './Character.js';

class Auto extends Character {
  constructor( img, x, y, width, height, speed) {
    super(img, x, y, width, height);
    this.speed = speed;
  }

  move() {
    if (this.x < 600) {
      this.x += this.speed;
    } else {
      this.x = 0;
    }
    return this;
  }
}

export default Auto;
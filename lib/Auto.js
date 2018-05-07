import Character from './Character.js';

class Auto extends Character {
  constructor( img, x, y, width, height, speed) {
    super(img, x, y, width, height);
    this.speed = speed;
  }

  move() {
    if (this.speed > 0) {
      if (this.x < 600) {
        this.x += this.speed;
      } else {
        this.x = -80;
      }
    } else if (this.speed < 0) {
      if (this.x < -120) {
        this.x = 680;
      }
      this.x += this.speed;
    }
    return this;
  }
}

export default Auto;
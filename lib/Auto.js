import Character from './Character.js';

class Auto extends Character {
  constructor( img, x, y, width, height) {
    super(img, x, y, width, height);
    this.speed = (function getRandomWholeNumber(min, max) {
      min = Math.ceil(1);
      max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    })();
  }

  move() {
    if(this.x < 600) {
      this.x += this.speed;
    } else {
      this.x = 0;
    }
    return this;
  }
}

export default Auto;
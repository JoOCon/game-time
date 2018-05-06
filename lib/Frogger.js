import Character from './Character.js';

class Frogger extends Character {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
    this.floating = false;
  }

  move(direction) {
    if (direction === 'up' && this.y > 0) {
      this.y -= 50;
    } else if (direction === 'left' && this.x > 70) {
      this.x -= 68;
    } else if (direction === 'right' && this.x < 500) {
      this.x += 68;
    } else if (direction === 'down' && this.y < 650) {
      this.y += 50;
    }
  }

  jumpOnLog(logs) {
    const frogOnLog = logs.find(log => log.y + 2 === this.y && this.x >= log.x && this.x <= log.x + log.width - 55);
    if (frogOnLog) {
      this.floating = true;
    } else {
      this.floating = false;
    }
  }

  drift(logs) {
    const logFrogIsOn = logs.find(log => log.y + 2 === this.y);
    if (this.floating) {
      if (logFrogIsOn.direction == 'right') {
        this.x += logFrogIsOn.speed;
      } else {
        this.x += logFrogIsOn.speed * -1;
      }
    }
  }
}

export default Frogger;
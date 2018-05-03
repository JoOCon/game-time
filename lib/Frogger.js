const Character = require('./Character.js');

class Frogger extends Character {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  move(event) {
    if (event === 'up' && this.y > 0) {
      this.y -= 50;
    } else if (event === 'down' && this.y < 650) {
      this.y = this.y + 50;
    } else if (event === 'left' && this.x > 50) {
      this.x -= 68;
    } else if (event === 'right' && this.x < 500) {
      this.x += 68;
    }
  }
}

module.exports = Frogger;
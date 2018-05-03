const Character = require('./Character.js');

class Auto extends Character {
  constructor(x, y, width, height, autoType) {
    super(x, y, width, height);
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height, this.autoType);
    ctx.style = ('red');
    return this;
  }

  move(cxt) {
    this.x += 1;
    return this;
    // needs to be able to move in a selected direction
  }
}

module.exports = Auto;
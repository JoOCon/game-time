const Character = require('./Character.js');
// require('locus')

class Auto extends Character {
  constructor( x, y, width, height, autoType, color ) {
    super(x, y, width, height);
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height, this.autoType);
    return this;
  }

  move(ctx) {
    this.x += 1;
    return this;
    // needs to be able to move in a selected direction
  }
}

module.exports = Auto;
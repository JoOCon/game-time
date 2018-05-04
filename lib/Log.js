const Character = require('./Character.js');

class Log extends Character {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
  }
}

module.exports = Log;
const Character = require('./Character.js');

class Log extends Character {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}

module.exports = Log;
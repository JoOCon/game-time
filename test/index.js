const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Frogger = require('../lib/Frogger.js');
const Log = require('../lib/Log.js');

describe('index create a new game and handle user input', () => {
  it('should instaciate a new game', () => {
    // Setup
    const logImg = '../img/frogger.png';
    const frogImg = '../img/log.png';
    const autoImg = '../img/yellow-car.png';
    const expected = {
      lives: 3,
      gameActive: true,
      level: 0,
      frogImg,
      logImg,
      autoImg
    };
    // Execution
    const acutual = new Game(frogImg, logImg, autoImg);

    // Expectation
    expect(acutual).to.deep.equal(expected);
  });
});
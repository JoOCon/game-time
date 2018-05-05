const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Log = require('../lib/Log.js');

describe('Game test suite', () => {
  it('should instantiate a new Game state', () => {
    //setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const game = new Game(frogImg, logImg);
    //execution
    const gameState = { lives: 3, gameActive: true, level: 0, frogImg, logImg };
    //expect

    expect(game).to.deep.equal(gameState);
  });

  it('should make an object of arrays to hold all logs', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const game = new Game(frogImg, logImg);

    const log1 = new Log('../img/log.png', -150, 298, 225, 52);
    const log2 = new Log('../img/log.png', 550, 248, 225, 52);
    const log3 = new Log('../img/log.png', -150, 198, 225, 52);
    const log4 = new Log('../img/log.png', 550, 148, 225, 52);
    const log5 = new Log('../img/log.png', -150, 98, 225, 52);
    const log6 = new Log('../img/log.png', 550, 48, 225, 52);
    const expected = {
      evens: [log1, log3, log5],
      odds: [log2, log4, log6]
    };

    // Execution
    const actual = game.generateLogs();
    // Expectation

    // eval(locus);
    expect(actual).to.deep.equal(expected);
  });
});
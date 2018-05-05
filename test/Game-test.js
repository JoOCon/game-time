const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Frogger = require('../lib/Frogger.js');
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

  it('should generate a new Frogger', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const game = new Game(frogImg, logImg);
    const expected = new Frogger(frogImg, 275, 650, 50, 50);

    // Execution
    const actual = game.generateFrog();
    // Expectation

    // eval(locus);
    expect(actual).to.deep.equal(expected);
  });

  it('should generate an array of Logs', () => {
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
    const expected = [log1, log2, log3, log4, log5, log6];

    // Execution
    const actual = game.generateLogs();
    // Expectation

    // eval(locus);
    expect(actual).to.deep.equal(expected);
  });
});
const { expect } = require('chai');
const Game = require('../lib/Game.js');
const Frogger = require('../lib/Frogger.js');
const Log = require('../lib/Log.js');

describe('Game test suite', () => {
  it('should instantiate a new Game state', () => {
    //setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const autoImg = '../img/yellow-car.png';
    const game = new Game(frogImg, logImg, autoImg);
    const frog = new Frogger(frogImg, 275, 650, 50, 50);
    const log1 = new Log(logImg, -150, 298, 250, 52, 1.5, 'right');
    const log2 = new Log(logImg, 550, 248, 250, 52, 2, 'left');
    const log3 = new Log(logImg, -150, 198, 250, 52, .5, 'right');
    const log4 = new Log(logImg, 550, 148, 250, 52, 1.5, 'left');
    const log5 = new Log(logImg, -150, 98, 250, 52, 1, 'right');
    const log6 = new Log(logImg, 550, 48, 250, 52, 1, 'left');
    const logs = [log1, log2, log3, log4, log5, log6];
    //execution
    const gameState = { lives: 3, gameActive: true, level: 0, frogImg, logImg, autoImg, frog, logs };
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

    expect(actual).to.deep.equal(expected);
  });

  it('should generate an array of Logs', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const game = new Game(frogImg, logImg);

    const log1 = new Log('../img/log.png', -150, 298, 250, 52, 1.5, 'right');
    const log2 = new Log('../img/log.png', 550, 248, 250, 52, 2, 'left');
    const log3 = new Log('../img/log.png', -150, 198, 250, 52, .5, 'right');
    const log4 = new Log('../img/log.png', 550, 148, 250, 52, 1.5, 'left');
    const log5 = new Log('../img/log.png', -150, 98, 250, 52, 1, 'right');
    const log6 = new Log('../img/log.png', 550, 48, 250, 52, 1, 'left');
    const expected = [log1, log2, log3, log4, log5, log6];

    // Execution
    const actual = game.generateLogs();
    // Expectation

    // eval(locus);
    expect(actual).to.deep.equal(expected);
  });
});
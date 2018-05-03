const { expect } = require('chai');
const Game = require('../lib/Game.js');

describe('Game test suite', () => {
  it('should instantiante a new Game state', () => {
    //setup
    const game = new Game();
    //execution
    const gameState = { lives: 3, gameActive: true, level: 0};
    //expect
    expect(game).to.deep.equal(gameState);
  });
});
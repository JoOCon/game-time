const { expect } = require('chai');
const Log = require('../lib/Log.js');

describe('Log test suite', () => {
  it('should instantiate a Log at the correct coordinates', () => {
    // Setup
    const log = new Log('../img/log.png', -150, 298, 250, 52, .75, 'right');
    // Execution
    const expected = {
      img: '../img/log.png',
      x: -150,
      y: 298,
      width: 250,
      height: 52,
      speed: .75,
      direction: 'right'
    };
    // Expectation

    expect(log).to.deep.equal(expected);
  });

  it('should be able to move left on canvas by 1px', () => {
    // Setup
    const log = new Log('../img/log.png', 550, 248, 250, 52, .55, 'left');
    const expectedLeft = 549.45;

    // Execution
    log.move();
    const actualRight = log.x;

    // Expectation
    expect(actualRight).to.equal(expectedLeft);
  });

  it('should be able to move right on canvas by 1px', () => {
    // Setup
    const log = new Log('../img/log.png', -150, 298, 250, 52, .75, 'right');
    const expectedRight = -149.25;

    // Execution
    log.move();
    const actualRight = log.x;

    // Expectation
    expect(actualRight).to.equal(expectedRight);
  });

  it('should reset log travelling to right to initial position', () => {
    // Setup
    const log = new Log('../img/log.png', 625, 298, 250, 52, .75, 'right');
    const expectedRight = -220;

    // Execution
    log.move();
    const actualRight = log.x;

    // Expectation
    expect(actualRight).to.equal(expectedRight);
  });

  it('should reset log travelling to left to initial position', () => {
    // Setup
    const log = new Log('../img/log.png', -250, 248, 250, 52, 2, 'left');
    const expectedRight = 600;

    // Execution
    log.move();
    const actualRight = log.x;

    // Expectation
    expect(actualRight).to.equal(expectedRight);
  });
});
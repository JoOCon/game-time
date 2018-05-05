const { expect } = require('chai');
const Log = require('../lib/Log.js');

describe('Log test suite', () => {
  it('should instantiate a Log at the correct coordinates', () => {
    // Setup
    const log = new Log('../img/log.png', 0, 295, 225, 55);
    // Execution
    const expected = {
      img: '../img/log.png',
      x: 0,
      y: 295,
      width: 225,
      height: 55
    };
    // Expectation

    expect(log).to.deep.equal(expected);
  });

  it('should be able to move left on canvas by 1px', () => {
    // Setup
    const log = new Log('../img/log.png', 0, 248, 225, 52);
    const expectedLeft = 1;
    const xDirection = -1;

    // Execution
    log.move(xDirection);
    const actualRight = log.x;

    // Expectation
    expect(actualRight).to.equal(expectedLeft);
  });

  it('should be able to move right on canvas by 1px', () => {
    // Setup
    const log = new Log('../img/log.png', 0, 248, 225, 52);
    const expectedRight = -1;
    const xDirection = 1;

    // Execution
    log.move(xDirection);
    const actualRight = log.x;

    // Expectation
    expect(actualRight).to.equal(expectedRight);
  });
});
const { expect } = require('chai');
const Frogger = require('../lib/Frogger.js');

require('locus');
describe('Frogger test suite', () => {
  it('should insatiate a new Frogger int the correct position', () => {
    // Setup
    const frog = new Frogger(275, 650, 50, 50);
    // Execution
    const expected = { x: 275, y: 650, width: 50, height: 50 };
    // Expect

    expect(frog).to.deep.equal(expected);
  });

  it.only('should be able to move by 50px up/down || 68px left/right', () => {
    const frog = new Frogger(275, 650, 50, 50);
    // const event = 'keyup';
    const event = 'up';
    const expected = 600;
    // Execution

    frog.move(event);
    const actual = frog.y;

    // eval(locus);

    expect(actual).to.equal(expected);
  });
});
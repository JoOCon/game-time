const { expect } = require('chai');
const Frogger = require('../lib/Frogger.js');

require('locus');
describe('Frogger test suite', () => {
  it('should insatiate a new Frogger int the correct position', () => {
    // Setup
    const frog = new Frogger(200, 200, 20, 20);
    // Execution
    const expected = { x: 200, y: 200, width: 20, height: 20 };
    // Expect

    expect(frog).to.deep.equal(expected);
  });

  it.skip('should be able to move by 50px up', () => {
    const frog = new Frogger(200, 650, 20, 20);
    const expected = 600;
    // Execution
    const frogMove = frog.move();

    expect(frogMove).to.be(expected);
  });
});
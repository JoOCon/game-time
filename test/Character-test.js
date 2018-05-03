const { expect } = require('chai');
const Character = require('../lib/Character');

describe('Character test suite', () => {
  it('should instantiate a new Character with correct position', () => {
    // Setup
    const character = new Character(0, 10, 50, 50);
    // Execution
    const expected = { x: 0, y: 10, width: 50, height: 50 };
    // Expect

    expect(character).to.deep.equal(expected);
  });
});
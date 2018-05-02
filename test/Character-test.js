const { expect } = require('chai');
const Character = require('../lib/Character');

describe('Character', () => {
  it('should instantiate a new Character with a x pos y pos width and height value', function () {
    // Setup
    const character = new Character(0, 10, 50, 50);
    // Execution
    const expected = { x: 0, y: 10, width: 50, height: 50 };
    // Expect

    expect(character).to.deep.equal(expected);
  });
});
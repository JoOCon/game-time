import { expect } from 'chai';
import Character from '../lib/Character';

describe('Character test suite', () => {
  it('should instantiate a new Character with correct position', () => {
    // Setup
    const expected = {
      img: '../img/frogger.png',
      x: 0,
      y: 10,
      width: 50,
      height: 50
    };
    // Execution
    const actual = new Character('../img/frogger.png', 0, 10, 50, 50);
    // Expect
    expect(actual).to.deep.equal(expected);
  });
});
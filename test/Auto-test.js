const { expect } = require('chai');
const Auto = require('../lib/Auto.js');
const Game = require('../lib/Game.js');
// require('locus');

describe('Auto test suite', () => {
  //setup
  // it('When a new Auto is istantiated it should have a size', () => {
  //   const params = { width: 100, height: 40 };
  //   const car = new Auto(params);

  //   const expectedSize = 100;

  //   expect(car.width).to.equal(expectedSize);
  // });

  it('when the move method is invoked i expect the x of auto to increment by 1', () => {
    const expectedX = 51;
    const params = { x: 50, y: 50, width: 100, 
                     height: 100, autoType: null,
                    color: 'red' }
    const car = new Auto(params);

    const actual = car.move();

    expect(actual.x).to.equal(expectedX);
  })

});
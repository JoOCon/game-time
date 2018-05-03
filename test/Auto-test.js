const { expect } = require('chai');
const Auto = require('../lib/Auto.js');
require('locus');

describe('Auto test suite', () => {
  //setup
  it('When Auto is instanciated it should receive an object as its params and set color to red', () => {
    const params = { x: 50, y: 50, width: 100, 
                     height: 100, autoType: null,
                    color: 'red' }
    const car = new Auto(params);

    const expectedColor = 'red'

    expect(car.color).to.equal(expectedColor)

  });

  it('when the move method is invoked i expect the x of auto to increment by 1', () => {
    const expectedX = 51;
    const params = { x: 50, y: 50, width: 100, 
                     height: 100, autoType: null,
                    color: 'red' }
    const car = new Auto(params);

    const actual = car.move()

    expect(actual.x).to.equal(expectedX)
  })

});
import { expect } from 'chai';
import Auto from '../lib/Auto.js';
// const Game = require('../lib/Game.js');
require('locus');

describe('Auto test suite', () => {

  it('should instantiate a new car', () => {
    //setup
    const carImg = '../img/yellow-car.png';
    const car = new Auto(carImg, 0, 605, 80, 40);
    //execution
    const expected = {img: carImg, x: 0, y: 605, width: 80, height: 40};
    //expect
    expect(car).to.deep.equal(expected);
  });

  it('should instantiate a new truck', () => {
    //setup
    const truckImg = '../img/large-truck.png';
    const truck = new Auto(truckImg, 0, 605, 80, 40);
    //execution
    const expected = {img: truckImg, x: 0, y: 605, width: 80, height: 40};
    //expect
    expect(truck).to.deep.equal(expected);
  });

  it.skip('when the move method is invoked i expect the x of auto to increment by 1', () => {
    const expectedX = 51;
    const params = { x: 50, y: 50, width: 100, 
                     height: 100, autoType: null,
                    color: 'red' }
    const car = new Auto(params);

    const actual = car.move();

    expect(actual.x).to.equal(expectedX);
  })

});
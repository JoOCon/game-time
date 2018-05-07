import { expect } from 'chai';
import Auto from '../lib/Auto.js';
// const Game = require('../lib/Game.js');
require('locus');

describe('Auto test suite', () => {

  it('should instantiate a new car', () => {
    //setup
    const carImg = '../img/yellow-car.png';
    const expected = {
      img: carImg, 
      x: 0, 
      y: 605, 
      width: 80, 
      height: 40, 
      speed: 2
    };
    //execution
    const actual = new Auto(carImg, 0, 605, 80, 40, 2);
    //expect
    expect(actual).to.deep.equal(expected);
  });

  it('should instantiate a new truck', () => {
    //setup
    const truckImg = '../img/large-truck.png';
    const expected = {
      img: truckImg, 
      x: 0, 
      y: 605, 
      width: 80, 
      height: 40, 
      speed: 2
    };
    //execution
    const actual = new Auto(truckImg, 0, 605, 80, 40, 2);
    //expect
    expect(actual).to.deep.equal(expected);
  });

  it('when the move method is invoked I expect the x of car to increment by 2', () => {
    const carImg = '../img/yellow-car.png';
    const car = new Auto(carImg, 50, 605, 80, 40, 2);
    car.move();
    const expected = 52;

    const actual = car.x;

    expect(actual).to.equal(expected);
  });

  it('when the move method is invoked I expect the x of truck to increment by 2', () => {
    const truckImg = '../img/large-truck.png';
    const truck = new Auto(truckImg, 50, 605, 80, 40, 2);
    truck.move();
    const expected = 52;

    const actual = truck.x;

    expect(actual).to.equal(expected);
  });

});
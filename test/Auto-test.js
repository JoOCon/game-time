import { expect } from 'chai';
import Auto from '../lib/Auto.js';

describe('Auto test suite', () => {

  it('should instantiate a new car', () => {
    // Setup
    const carImg = '../img/yellow-car.png';
    const expected = {
      img: carImg, 
      x: 0, 
      y: 605, 
      width: 80, 
      height: 40, 
      speed: 2
    };
    // Execution
    const actual = new Auto(carImg, 0, 605, 80, 40, 2);
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should instantiate a new truck', () => {
    // Setup
    const truckImg = '../img/large-truck.png';
    const expected = {
      img: truckImg, 
      x: 0, 
      y: 605, 
      width: 80, 
      height: 40, 
      speed: 2
    };
    // Execution
    const actual = new Auto(truckImg, 0, 605, 80, 40, 2);
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('when the move method is invoked I expect the x of car to increment by 2', () => {
    // Setup
    const carImg = '../img/yellow-car.png';
    const car = new Auto(carImg, 50, 605, 80, 40, 2);
    car.move();
    const expected = 52;
    // Execution
    const actual = car.x;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('when the move method is invoked I expect the x of truck to increment by 2', () => {
    // Setup
    const truckImg = '../img/large-truck.png';
    const truck = new Auto(truckImg, 50, 605, 80, 40, 2);
    truck.move();
    const expected = 52;
    // Execution
    const actual = truck.x;
    // Expectation
    expect(actual).to.equal(expected);
  });
});
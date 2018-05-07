import { expect } from 'chai';
import Game from '../lib/Game.js';
import Frogger from '../lib/Frogger.js';
import Log from '../lib/Log.js';
import Auto from '../lib/Auto.js';


describe('Game test suite', () => {
  it('should instantiate a new Game state', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const carImg = '../img/yellow-car.png';
    const truckImg = '../img/large-truck.png';
    const frog = new Frogger(frogImg, 275, 650, 50, 50);
    const log1 = new Log(logImg, -150, 298, 250, 52, 1.5, 'right');
    const log2 = new Log(logImg, 550, 248, 250, 52, 2, 'left');
    const log3 = new Log(logImg, -150, 198, 250, 52, .5, 'right');
    const log4 = new Log(logImg, 550, 148, 250, 52, 1.5, 'left');
    const log5 = new Log(logImg, -150, 98, 250, 52, 1, 'right');
    const log6 = new Log(logImg, 550, 48, 250, 52, 1, 'left');
    const logs = [log1, log2, log3, log4, log5, log6];
    const car1 = new Auto(carImg, 0, 605, 80, 40, 4);
    const car2 = new Auto(carImg, 100, 605, 80, 40, 4);
    const car3 = new Auto(carImg, 100, 505, 80, 40, 2);
    const car4 = new Auto(carImg, 200, 505, 80, 40, 2);
    const car5 = new Auto(carImg, 300, 505, 80, 40, 2);
    const car6 = new Auto(carImg, 0, 405, 80, 40, 3);
    const car7 = new Auto(carImg, 350, 405, 80, 40, 3);
    const truck1 = new Auto(truckImg, 0, 555, 120, 40, -2);
    const truck2 = new Auto(truckImg, 300, 555, 120, 40, -2);
    const truck3 = new Auto(truckImg, 100, 455, 120, 40, -3);
    const vehicles = [car1, car2, car3, car4, car5, car6, car7, truck1, truck2, truck3];
    // Execution
    const expected = {
      lives: 3,
      gameActive: true,
      level: 0,
      wins: 0,
      frogImg,
      logImg,
      carImg,
      truckImg,
      frog,
      logs,
      vehicles
    };
    const actual = new Game(frogImg, logImg, carImg, truckImg);
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should generate a new Frogger', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const game = new Game(frogImg, logImg);
    const expected = new Frogger(frogImg, 275, 650, 50, 50);
    // Execution
    const actual = game.generateFrog();
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should generate an array of Logs', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const truckImg = '../img/large-truck.png';
    const carImg = '../img/yellow-car.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const log1 = new Log('../img/log.png', -150, 298, 250, 52, 1.5, 'right');
    const log2 = new Log('../img/log.png', 550, 248, 250, 52, 2, 'left');
    const log3 = new Log('../img/log.png', -150, 198, 250, 52, .5, 'right');
    const log4 = new Log('../img/log.png', 550, 148, 250, 52, 1.5, 'left');
    const log5 = new Log('../img/log.png', -150, 98, 250, 52, 1, 'right');
    const log6 = new Log('../img/log.png', 550, 48, 250, 52, 1, 'left');
    const expected = [log1, log2, log3, log4, log5, log6];
    // Execution
    const actual = game.generateLogs();
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should generate an array of Autos', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const truckImg = '../img/large-truck.png';
    const carImg = '../img/yellow-car.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const car1 = new Auto(carImg, 0, 605, 80, 40, 4);
    const car2 = new Auto(carImg, 100, 605, 80, 40, 4);
    const car3 = new Auto(carImg, 100, 505, 80, 40, 2);
    const car4 = new Auto(carImg, 200, 505, 80, 40, 2);
    const car5 = new Auto(carImg, 300, 505, 80, 40, 2);
    const car6 = new Auto(carImg, 0, 405, 80, 40, 3);
    const car7 = new Auto(carImg, 350, 405, 80, 40, 3);
    const truck1 = new Auto(truckImg, 0, 555, 120, 40, -2);
    const truck2 = new Auto(truckImg, 300, 555, 120, 40, -2);
    const truck3 = new Auto(truckImg, 100, 455, 120, 40, -3);
    const expected = [car1, car2, car3, car4, car5, car6, car7, truck1,
      truck2, truck3];
    // Execution
    const actual = game.generateAutos();
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should reset frog to initial game state when game.reset method is invoked', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const carImg = '../img/yellow-car.png';
    const truckImg = '../img/large-truck.png';
    // const frog = new Frogger(frogImg, 275, 650, 50, 50);
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const expected = {
      x: 275,
      y: 650
    };
    // Execution
    game.reset();
    const actual = {
      x: game.frog.x,
      y: game.frog.y
    };
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should reset frog to initial game and remove 1 life state when game.drown method is invoked', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const carImg = '../img/yellow-car.png';
    const truckImg = '../img/large-truck.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);

    const expected = {
      x: 275,
      y: 650,
      lives: 2
    };
    // Execution
    game.frog.floating = false;
    game.frog.y = 275;

    game.drown();
    // game.reset();
    const actual = {
      x: game.frog.x,
      y: game.frog.y,
      lives: game.lives
    };
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should reset frog to initial game state when game.outOfBounds method is invoked', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const carImg = '../img/yellow-car.png';
    const truckImg = '../img/large-truck.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const expected = {
      x: 275,
      y: 650
    };
    // Execution
    game.outOfBounds();
    const actual = {
      x: game.frog.x,
      y: game.frog.y
    };
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should reset frog to initial game state and add a point when game.hasMadeItToLillyPad when invoked', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const carImg = '../img/yellow-car.png';
    const truckImg = '../img/large-truck.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const expected = {
      x: 275,
      y: 650,
      wins: 1
    };
    // Execution
    game.frog.x = 75;
    game.frog.y = 45;
    game.hasMadeItToLillyPad();
    const actual = {
      x: game.frog.x,
      y: game.frog.y,
      wins: game.wins
    };
    // Expectation
    expect(actual).to.deep.equal(expected);
  });
});
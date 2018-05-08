import { expect } from 'chai';
import Game from '../lib/Game.js';

describe('Game test suite', () => {
  it('should instantiate a new Game state', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const carImg = '../img/yellow-car.png';
    const truckImg = '../img/large-truck.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);
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
      frog: game.generateFrog(),
      logs: game.generateLogs(),
      vehicles: game.generateAutos()
    };
    const actual = game;
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should generate a new Frogger', () => {
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const truckImg = '../img/large-truck.png';
    const carImg = '../img/yellow-car.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const expected = game.frog;
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
    const expected = game.logs;
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
    const expected = game.vehicles;
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
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const expected = {
      x: 275,
      y: 650
    };
    // Execution
    game.frog.y = 300;
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
      y: 650,
      lives: 2
    };
    // Execution
    game.frog.x = 600;
    game.outOfBounds();
    const actual = {
      x: game.frog.x,
      y: game.frog.y,
      lives: game.lives
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

  it('should reset frog to initial game location and remove a life point when game.vehicleHitFrog is invoked', () => {
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
    game.frog.y = 550;
    game.vehicleHitFrog();
    const actual = {
      x: game.frog.x,
      y: game.frog.y,
      lives: game.lives
    };
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should end game when game.gameOver method is invoked', () => {
    // Setup
    const frogImg = '../img/frogger.png';
    const logImg = '../img/log.png';
    const carImg = '../img/yellow-car.png';
    const truckImg = '../img/large-truck.png';
    const game = new Game(frogImg, logImg, carImg, truckImg);
    const expected = {
      gameActive: false
    };
    // Execution
    game.lives = 0;
    game.frog.y = 550;
    game.gameOver();
    const actual = {
      gameActive: game.gameActive
    };
    // Expectation
    expect(actual).to.deep.equal(expected);
  });
});
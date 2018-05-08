import { expect } from 'chai';
import Frogger from '../lib/Frogger.js';
import Log from '../lib/Log.js';

describe('Frogger test suite', () => {
  it('should insatiate a new Frogger in the correct position', () => {
    // Setup
    const expected = {
      img: '../img/frogger.png',
      x: 275,
      y: 650,
      width: 50,
      height: 50,
      floating: false
    };
    // Execution
    const actual = new Frogger('../img/frogger.png', 275, 650, 50, 50);
    // Expectation
    expect(actual).to.deep.equal(expected);
  });

  it('should be able to move up on canvas by 50px', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', 275, 650, 50, 50);
    const upEvent = 'up';
    const expected = 600;
    // Execution
    frog.move(upEvent);
    const actual = frog.y;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should be able to down up on canvas by 50px', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', 275, 600, 50, 50);
    const downEvent = 'down';
    const expected = 650;
    // Execution
    frog.move(downEvent);
    const actual = frog.y;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should be able to move right on canvas by 68px', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', 275, 650, 50, 50);
    const rightEvent = 'right';
    const expected = 343;
    // Execution
    frog.move(rightEvent);
    const actual = frog.x;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should be able to move left on canvas by 68px', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', 275, 650, 50, 50);
    const leftEvent = 'left';
    const expected = 207;
    // Execution
    frog.move(leftEvent);
    const actual = frog.x;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should be able move forward but not outside canvas', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', 275, 650, 50, 50);
    const upEvent = 'up';
    const expected = 0;
    // Execution
    for (let i = 0; i < 13; i++) {
      frog.move(upEvent);
    }
    const actual = frog.y;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should be able move right but not outside of canvas', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', 275, 650, 50, 50);
    const rightEvent = 'right';
    const expected = 547;
    // Execution
    for (let i = 0; i < 4; i++) {
      frog.move(rightEvent);
    }
    const actual = frog.x;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should be able move left but not outside of canvas', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', 275, 650, 50, 50);
    const leftEvent = 'left';
    const expected = 3;
    // Execution
    for (let i = 0; i < 4; i++) {
      frog.move(leftEvent);
    }
    const actual = frog.x;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should set frog.floating to true if frog is on a log', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', -150, 300, 50, 50);
    const log1 = new Log('../img/log.png', -150, 298, 250, 52, 1.5, 'right');
    const log2 = new Log('../img/log.png', 550, 248, 250, 52, 2, 'left');
    const log3 = new Log('../img/log.png', -150, 198, 250, 52, .5, 'right');
    const log4 = new Log('../img/log.png', 550, 148, 250, 52, 1.5, 'left');
    const log5 = new Log('../img/log.png', -150, 98, 250, 52, 1, 'right');
    const log6 = new Log('../img/log.png', 550, 48, 250, 52, 1, 'left');
    const logs = [log1, log2, log3, log4, log5, log6];
    const expected = true;
    // Execution
    frog.jumpOnLog(logs);
    const actual = frog.floating;
    // Expectation
    expect(actual).to.equal(expected);
  });

  it('should be able to float and move on a log', () => {
    // Setup
    const frog = new Frogger('../img/frogger.png', -150, 300, 50, 50);
    const log1 = new Log('../img/log.png', -150, 298, 250, 52, 1.5, 'right');
    const log2 = new Log('../img/log.png', 550, 248, 250, 52, 2, 'left');
    const log3 = new Log('../img/log.png', -150, 198, 250, 52, .5, 'right');
    const log4 = new Log('../img/log.png', 550, 148, 250, 52, 1.5, 'left');
    const log5 = new Log('../img/log.png', -150, 98, 250, 52, 1, 'right');
    const log6 = new Log('../img/log.png', 550, 48, 250, 52, 1, 'left');
    const logs = [log1, log2, log3, log4, log5, log6];
    const expected = -148.5;
    // Execution
    frog.jumpOnLog(logs);
    frog.drift(logs);
    const actual = frog.x;
    // Expectation
    expect(actual).to.equal(expected);
  });
});
'use strict';
const Stack = require('../stacks');
function isAlive() {
  return true;
}


describe('stacks', () => {

  it('can instatiate a new stack', () => {
    let stack = new Stack;
    stack.push(5);
    expect(stack.peek()).toBeTruthy();

  });

  it('returns popped values in the correct LIFO order', () => {
    let stack1 = new Stack;
    let testArr = [];
    stack1.push(5);
    stack1.push(99);
    stack1.push(14);
    stack1.push(12);
    stack1.push(69);
    testArr.push(stack1.pop());
    testArr.push(stack1.pop());
    testArr.push(stack1.pop());
    testArr.push(stack1.pop());
    testArr.push(stack1.pop());

    
    let comparisonArr = [69, 12, 14, 99, 5];

    expect(testArr).toEqual(comparisonArr);

  });

});


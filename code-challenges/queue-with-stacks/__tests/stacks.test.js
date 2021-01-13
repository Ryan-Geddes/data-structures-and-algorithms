'use strict';
// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception



const Stack = require('../stacks');



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
'use strict';
const util = require('util');
const Queue = require('./queues');
const Stack = require('./stacks');

let queue = new Queue;

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.peek();
console.log(util.inspect(queue, {showHidden:false, depth: null}));

let stack1 = new Stack;

stack1.push(5);
stack1.push(99);
stack1.push(14);
stack1.push(12);
stack1.push(69);

stack1.peek();

stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();

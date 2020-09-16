'use strict';
const util = require('util');
const QQ = require('./queue-with-stacks');

let queue = new QQ();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();

queue.peek();



console.log(util.inspect(queue, {showHidden:false, depth: null}));

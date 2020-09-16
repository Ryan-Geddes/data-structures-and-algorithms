'use strict';

const util = require('util');
const LL = require('../linkedList/linked-list');
let list = new LL();


class PseudoQueue {

  constructor() {
    this.container = stack2;
  }

  enqueue(item) {
    this.container.push(item);
  }

  dequeue() {
    this.container.pop();
  }

  peek() {
    this.container.peek();
  }
}

class Stack {

  constructor() {
    this.container = list;
  }

  push(item) {
    this.container.append(item);
  }

  pop() {
    let temp = this.container.head.value;
    let current = this.container.head.next;
    this.container.head = current;
    console.log('dequeued value', temp);
    return(temp);
  }

  peek() {
    //console.log('rear of queue:', this.container.head.value);
    return this.container.head.value;
  }
}


const stack1 = new Stack;
const stack2 = new Stack;

while (!stack1.isEmpty()){
  stack2.push(stack1.pop);
}
console.log('stack2', stack2);
module.exports = PseudoQueue;



//Your queue isn't returning FIFO values,
//instantiate 2 stacks in this files and push the values of original
//stack into a new stack to reverse them.
'use strict';

const util = require('util');
const LL = require('../linkedList/linked-list');
let list = new LL();


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
    console.log('rear of queue:', this.container.head.value);
    return this.container.head.value;
  }
}


const stack1 = new Stack;
const stack2 = new Stack;




module.exports = Stack;
'use strict';

const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {

  constructor(node = null) {
    this.front = node;
    this.rear = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.rear) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if(this.front){
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      console.log('value dequed:', temp.value);
      return(temp.value);
    }else{
      return undefined;
    }
  }

  peek() {
    if(this.front){
      return this.front.value;
    }else{
      return undefined;
    }
  }

  isEmpty() {
    if(this.front){
      return false;
    }else{
      return true;
    }
  }
}


module.exports = Queue;



//Your queue isn't returning FIFO values,
//instantiate 2 stacks in this files and push the values of original
//stack into a new stack to reverse them.
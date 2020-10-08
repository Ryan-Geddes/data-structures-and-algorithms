'use strict';

const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(node = null) {
    this.top = node;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if(this.top){
      let temp = this.top.value;
      this.top = this.top.next;
      console.log('popped value:', temp);
      return(temp);
    }else{
      console.log('STACK IS EMPTY');
      return undefined;
    }
  }

  peek() {
    if(this.top){
      console.log('top of stack:', this.top.value);
      return this.top.value;}
    else{
      console.log('STACK IS EMPTY');
      return undefined;
    }
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = Stack;
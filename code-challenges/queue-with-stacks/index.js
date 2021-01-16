'use strict';
//implement a queue with two stacks



class Stack {
  constructor(){
    this.items = [];
  }

  push(value){
    return this.items.push(value);
  }

  pop(){
    return this.items.pop();
  }

  peek(){
    return this.items[this.items.length -1];
  }

}

class Queue{
  constructor(){
    this.items = new Stack;
  }

  nq(item){
    this.items.push(item);
  }

  dq(){
    let output = new Stack;
    let value;
    while(this.items.peek()){
      output.push(this.items.pop());
    }
    value = output.pop();
    while(output.peek()){
      this.items.push(output.pop());
    }
    return value;
  }

  peek(){
    return this.items.peek();
  }
}


'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }


  prepend(value){
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }

    return this;
  }
  

  includes(value){
    let input = value;
    let current = this.head;

    while(current.next) {
      if (current.value === input) {
        console.log(`the following value exists:`, current.value);
        return true;
      }
      else{
        current = current.next;
      }
    }
    if (current.value === input) {
      console.log(`the following value exists:`, current.value);
      return true;
    }else{
      console.log(`value ${input} does not exist`);
      return false;
    }

  }


  toString(){
    let current = this.head;
    let valArr = [];
    while(current.next){
      valArr.push(` {${current.value}} `);
      current = current.next;
    }
    valArr.push(` {${current.value}} `);
    valArr.push(`NULL`);
    let output = valArr.join(' -> ');
    //console.log(output);
    return output;
  }

}

module.exports = LinkedList;

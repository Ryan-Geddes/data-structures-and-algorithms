'use strict';


const Node = require('./node.js');


class LinkedList{
  constructor(){
    this.head = null;
  }

  append(value){
    // .append(value) which adds a new node with the given value to the end of the list
    let node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  prepend(value){
    let node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }else{
      let current = this.head;
      node.next = current;
    }
  }

  insertBefore(value, newVal){
    // .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
    let node = new Node(newVal);
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
      let previous = current;
      while(current){
        if(current.value === value && current === this.head){
          node.next = current;
          this.head = node;
          return;
        }
        if(current.value === value){
          node.next = current;
          previous.next = node;
          return;
        }else{
          previous = current;
          current = current.next;
        }
      }
    }
  }

  insertAfter(value, newVal){
    // .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
    let node = new Node(newVal);
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
      while(current){
        if(current.value === value){
          node.next = current.next;
          current.next = node;
          return;
        }else{
          current = current.next;
        }
      }
    }
  }

}

module.exports = LinkedList;

// Unit Tests
// Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

// You have access to the Node class and all the properties on the Linked List class.

// Write tests to prove the following functionality:

// Can successfully add a node to the end of the linked list
// Can successfully add multiple nodes to the end of a linked list
// Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list
// Unit tests must be passing before you submit your final solution code.
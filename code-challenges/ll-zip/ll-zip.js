'use strict';

// Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into
// one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. 
// Try and keep additional space down to O(1). 
// You have access to the Node class and all the properties on the Linked List class 
// as well as the methods created in previous challenges.

let Node = require('./node.js');

class LinkedList {
  constructor(node={}){
    this.head = node;
  }

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
}


class LinkedList {
  constructor(node={}){
    this.head = node;
  }

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
}


function zipper(list1, list2){
  //
  let current1 = list1.head;
  let next1 = null;
  let current2 = list2.head;
  let next2 = null;

  while(current1){
    next1 = current1.next;
    current1.next = current2;
    next2 = current2.next;
    current2.next = next1;
    current1 = next1;
    current2 = next2;

    if(!current1.next && current2.next){
      current1.next = current2;
      return list1;
    }

    if(current1.next && !current2.next){
      next1 = current1.next;
      current2.next = next1;
      current1.next = current2;
      return list1;
    }
  }
  return list1;
}

let list1 = new LinkedList;
list1.append('A')
list1.append('b')
list1.append('c')
list1.append('d')

let list2 = new LinkedList;
list2.append('1')
list2.append('2')
list2.append('3')
list2.append('4')


console.log(JSON.stringify(zipper(list1, list2)));
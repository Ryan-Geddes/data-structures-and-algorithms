'use strict';

// Write a method for the Linked List class which takes a number, k, as a parameter. 
// Return the node’s value that is k from the end of the linked list. You have access to
//  the Node class and all the properties on the Linked 
// List class as well as the methods created in previous challenges.

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(node){
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

  findFromEnd(k){
    let pointer1;
    let pointer2;
    let length = 1;
    if(!this.head){
      console.log('EMPTY LIST')
      return undefined;
    }else{
      //start pointer 1 at head
      pointer1 = this.head;
      // iterate through list to get length;
      while(pointer1.next){
        length++;
        // console.log(length);
        pointer1 = pointer1.next;
      }
      //find the location of return value @ length - k;
      let index = length - k;
      // if index is negative, k is greater than list length;
      if(index < 0){
        console.log('TOO LONG')
        return undefined;
      }
      //let's reuse length var for pointer 2 accumulator
      length = 1;
      //start at head
      pointer2 = this.head;
      //when accumulator is equal to index, return val;
      while(pointer2){
        if(length === index){
          return pointer2.value;
        }
        length++;
        pointer2 = pointer2.next;
      }
    }
  }
}

let list = new LinkedList;

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

console.log(list.findFromEnd(0))
console.log(list.findFromEnd(6))
console.log(list.findFromEnd(4))
console.log(list.findFromEnd(2))

let list2 = new LinkedList;

list2.append(1)

console.log(list2.findFromEnd(1))
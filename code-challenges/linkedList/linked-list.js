'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
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

  insertBefore(value, newVal){
    let current = this.head;
    let previousVal = null;
    let temp = 69;
    let carryVal = current.value;
    console.log('carryVal', carryVal);
    console.log('previousVal', previousVal);

    while(current.next) {
      if (current.value === value){
        carryVal = current.value;
        console.log('carryVal if loop', carryVal);
        current.value = newVal;
        console.log('current.value if loop', current.value);
        previousVal = current.value;
        console.log('previousVal if loop', previousVal);
        break;
        //current = current.next;
      }else{
        carryVal = current.value;
        console.log('carryVal else loop', carryVal);
        previousVal = current.value;
        console.log('previousVal else loop', previousVal);
        current = current.next;
      }
    }

    while(current.next){
      temp = carryVal;
      console.log('temp while loop', temp);
      carryVal = current.value;
      console.log('carryVal while loop', carryVal);
      current.value = temp;
      console.log('current.val while loop', current.value);
      previousVal = current.value;
      current = current.next;
    }
    console.log('PREVIOUS.VAL', previousVal);
    if(!current.next){
      console.log('TAILS');
      let tail = new Node(newVal);
      current.next = tail;
    }else{
      temp = carryVal;
      console.log('temp TAIL loop', temp);
      carryVal = current.value;
      console.log('carryVal TAIL loop', carryVal);
      current.value = temp;
      console.log('current.val TAIL loop', current.value);
      previousVal = current.value;
      let tail = new Node(carryVal);
      current.next = tail;
    }
  }



  // insertAfter(value, newVal){
  // temp = carryVal;
  // console.log('temp outside loop', temp);
  // carryVal = current.value;
  // console.log('carryVal outside loop', carryVal);
  // current.value = temp;
  // console.log('current.val outside loop', current.value);
  // previousVal = current.value;
  // let tail = new Node(carryVal);
  // current.next = tail;


  // }

  zipper(list1, list2){
    let current = list1.head;
    let temp = 69;
    let current2 = list2.head;
    console.log('list1head', current);
    console.log('list2head', current2);

    while(current.next){
    
      temp = current.next;
      console.log('temp ', temp);
      current.next = current2;
      console.log('current.next ', current.next);
      current = current.next;
      console.log('current ', current);

      temp = current.next;
      console.log('temp ', temp);
      current = current.next;
      console.log('current ', current);

      temp = current.next;
      console.log('temp ', temp);
      current.next = current2;
      console.log('current.next ', current.next);
    }

  }

}

module.exports = LinkedList;

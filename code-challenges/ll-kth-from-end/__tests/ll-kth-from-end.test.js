'use strict';

// Write tests to prove the following functionality:

// Where k is greater than the length of the linked list
// Where k and the length of the list are the same
// Where k is not a positive integer
// Where the linked list is of a size 1
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list


const Node = require('../node.js');
const LinkedList = require('../ll-insertions');


describe('Test if Node works', () => {
  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

  it('It can instantiate a new node', () => {
    let node = new Node('should work');
    let expected = { value: 'should work', next: null };
    expect(node).toEqual(expected);
  });
});


describe('Code Challenge 6: insert before/after', () => {
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);
  list2.append(1);
  list2.append(2);

  it('Can successfully add a node to the end of the linked list', () => {
    list2.append(3);
    expect(list1===list2).toEqual(true);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {

  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {

  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
  });


});





'use strict';

// Write a function called tree_intersection that takes two binary tree parameters.
// Without utilizing any of the built-in library methods available to your language,
// return a set of values found in both trees.

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue{
  constructor(){
    this.items = [];
  }

  nq(value){
    return this.items.push(value);
  }

  dq(){
    return this.items.shift();
  }

  peek(){
    return this.items[this.items.length-1];
  }
}

class Tree{
  constructor(node){
    this.root = node;
  }

  add(value){
    this.insert(value, this.root);
  }

  insert(value, node){

    let newNode = new Node(value);
    
    if(!this.root){
      this.root = newNode;
      return;
    }
    if(value === node.value){
      return;
    }
    if(value > node.value){
      if(!node.right){
        node.right = newNode;
        return;
      }else{
        this.insert(value, node.right);
      }
    }

    if(value < node.value){
      if(!node.left){
        node.left = newNode;
        return;
      }else{
        this.insert(value, node.left);
      }
    }
  }
}

function treeIntersectionRecursive(tree1, tree2){
  let table = new Map();
  let output = [];

  const _loadMap = (node)=>{
    table.set(node.value);
    if(node.left){_loadMap(node.left);}
    if(node.right){_loadMap(node.right);}
  };
  _loadMap(tree1.root);

  const _checkMap = (node)=>{
    if(table.has(node.value)){
      output.push(node.value);
    }
    if(node.left){_checkMap(node.left);}
    if(node.right){_checkMap(node.right);}
  };
  
  _checkMap(tree2.root);

  return output;

}

function treeIntersectionIterative(tree1, tree2){
  //create a hashtable
  //iterate through tree 1
  //set value of every node
  //iterate through tree2
  //check value against hash table at every node
  //return accordingly
  let table = new Map();
  let output = [];
  let q = new Queue;

  let current = tree1.root;
  while(current){
    if(current.left){
      q.nq(current.left);
    }
    if(current.right){
      q.nq(current.right);
    }
    if(table.has(current.value)){
      current = q.dq();
    }else{
      table.set(current.value, current.value);
      current = q.dq();
    }
  }

  current = tree2.root;
  while(current){
    if(current.left){
      q.nq(current.left);
    }
    if(current.right){
      q.nq(current.right);
    }
    if(table.has(current.value)){
      output.push(current.value);
    }
    current = q.dq();
  }
  return output;
}

let tree1 = new Tree;
let tree2 = new Tree;

tree1.add(1)
tree1.add(2)
tree1.add(3)
tree1.add(69)
tree1.add(5)

tree2.add(6)
tree2.add(7)
tree2.add(8)
tree2.add(69)
tree2.add(9);

console.log(JSON.stringify(treeIntersectionIterative(tree1, tree2)));
'use strict';


// Write a breadth first traversal method which takes a Binary Tree as its unique input. 
//Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, 
//and return a list of the values in the tree in the order they were encountered.

class TreeNode{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Queue{
  constructor(){
    this.items = [];
  }

  nq(item){
    this.items.push(item);
  }

  dq(){
    return this.items.shift();
  }

  peek(){
    return this.items[0];
  }
}

class BST {
  constructor(node){
    this.root = node;
  }


  insert(value){
    this.add(value, this.root);
  }

  add(value, node){
    let newNode = new TreeNode(value);

    if(!this.root){
      this.root = newNode;
      return;
    }

    if(node.value === value){
      return;
    }

    if(node.value > value){
      if(!node.left){
        node.left = newNode;
        return;
      }else{
        this.add(value, node.left);
      }
    }
    if(node.value < value){
      if(!node.right){
        node.right = newNode;
        return;
      }else{
        this.add(value, node.right);
      }
    }
  }

  
  printBft(){

    if(!this.root){
      return null;
    }

    let output = [];
    let q = new Queue;
    let current = this.root;
    q.nq(current);

    while(current){
      output.push(current.value);
      if(current.left){
        q.nq(current.left);
      }
      if(current.right){
        q.nq(current.right);
      }
      q.dq()
      current = q.peek();
    }
    return output;
  }

}


let tree = new BST;

tree.insert(5);
tree.insert(9);
tree.insert(4);
tree.insert(2);
tree.insert(13);
tree.insert(7);

console.log(tree.printBft());

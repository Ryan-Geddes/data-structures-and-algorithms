'use strict';


class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



class BinaryTree {

  constructor(node = null) {
    this.root = node;
  }

  preOrder() {

    let results = [];

    const _walk = (node) => {
      // do the work
      results.push(node.value);

      // continue along
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    }

    _walk(this.root);

    return results;

  }

  inOrder() {

    let results = [];

    const _walk = (node) => {

      if (node.left) { _walk(node.left); }
      results.push(node.value);
      if (node.right) { _walk(node.right); }
    }

    _walk(this.root);
    return results;

  }

  postOrder() {
    let results = [];

    const _walk = (node) => {

      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      results.push(node.value);
    };

    _walk(this.root);
    return results;

  }

}

class BinarySearchTree extends BinaryTree {
  
  constructor(node = null) {
    super(node);
  }

  add(value){
    this.insert(value, this.root);
  }

  insert(value, node) {
    
    let newNode = new TreeNode(value);

    if(!this.root){
      this.root=newNode;
      return;
    }

    if(node.value === value){
      return;
    }

    if(node.value > value ){
      if(!node.right){
        node.right = newNode;
        return;
      }else{
        this.insert(value, node.right);
      }
    }

    if(node.value < value ){
      if(!node.left){
        node.left = newNode;
        return;
      }else{
        this.insert(value, node.left);
      }
    }
    
  }

  contains(value) {
    //  accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
    let boolean = undefined;

    const _walk = (node) => {
      let current = node;
      if (value === current.value)
      {boolean = true; return true;}
      if (node.left) {_walk(node.left); }
      if (node.right) {_walk(node.right); }
    };
    _walk(this.root);
    if (boolean){
      return true;
    }else{
      return false;
    }
  }


  containsIterative(value) {
    //  accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
    //REDO THIS ITERATIVELY
  }

  addIterative(value) {
    //REDO THIS ITERATIVELY
  }
}

module.exports = BinarySearchTree;

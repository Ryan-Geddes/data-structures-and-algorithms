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

  add(value) {

    let newNode = new TreeNode(value);

    const _walk = (node) => {
      let current = node;
      if (newNode.value > current.value && !node.right)
        {node.right = newNode;}
      if (newNode.value > current.value && node.right)
        {_walk(node.right);}

      if (newNode.value < current.value && !node.left)
        {node.left = newNode;}
      if (newNode.value < current.value && node.left)
        {_walk(node.left);}

    };
    _walk(this.root);

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
}

module.exports = BinarySearchTree;

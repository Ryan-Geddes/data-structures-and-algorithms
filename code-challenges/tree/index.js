'use strict';


class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const BinaryTree = require('./tree');

let rootnode = new TreeNode(20);
let binaryTree = new BinaryTree(rootnode);


binaryTree.add(12);
binaryTree.add(6);
binaryTree.add(17);
binaryTree.add(32);
binaryTree.add(25);
binaryTree.add(40);
binaryTree.add(70);
console.log(JSON.stringify(binaryTree, undefined, 7));

// console.log(binaryTree.preOrder());
console.log(binaryTree.inOrder());
console.log(binaryTree.postOrder());


console.log(binaryTree.contains(32));
console.log(binaryTree.contains(12));
console.log(binaryTree.contains(69));
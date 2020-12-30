'use strict';

// Write a function called FizzBuzzTree which takes a k-ary tree as an argument.
// Determine whether or not the value of each node is divisible by 3, 5 or both. 
//Create a new tree with the same structure as the original, but the values modified as follows:
// If the value is divisible by 3, replace the value with “Fizz”
// If the value is divisible by 5, replace the value with “Buzz”
// If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
// If the value is not divisible by 3 or 5, simply turn the number into a String.
// Return a new tree.


class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
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

    if(node.value === value){
      return;
    }

    if(value < node.value){
      if(!node.left){
        node.left = newNode;
        return;
      }else{
        this.insert(value, node.left);
      }
    }
    if (value > node.value){
      if(!node.right){
        node.right = newNode;
        return;
      }else{
        this.insert(value, node.right);
      }
    }
  }
}


function fizzBuzzPre(tree){
  let output = new Tree;
  let outputRoot = tree.root;
  let root = tree.root;

  function _walk(node, outputNode){
    if(node.value % 15 === 0){
      outputNode.value = 'FizzBuzz';
    }else if(node.value % 5 === 0){
      outputNode.value = 'Buzz';
    }else if(node.value % 3 === 0){
      outputNode.value = 'Fizz';
    }
    if (node.left){_walk(node.left, outputNode.left);}
    if (node.right){_walk(node.right, outputNode.right);}
  }
  _walk(root, outputRoot);
  return output;
}


let tree = new Tree;

tree.add(4);
tree.add(10);
tree.add(30);
tree.add(6);
tree.add(7);
tree.add(69);
tree.add(15);
tree.add(11);
tree.add(12);

console.log(JSON.stringify(tree, null, 2));
fizzBuzzPre(tree);
console.log(JSON.stringify(tree, null, 2));


function fizzBuzzIn(tree){


}


function fizzBuzzPost(tree){


}

function fizzBuzzDepth(tree){


}







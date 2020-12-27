'use strict';

const Stack = require('./stacks.js');


//function will return boolean based on if input braces are balanced or not.

//first split input string into an array, array and regex out any symbols that aren't a bracket.

//push each bracket into a stack

//if bracket is an opening bracket, continue pushing

//if bracket is a closing bracket, pop the bracket from top of stack and compare
    //if they match, continue

    //if they do not match FAIL

//if stack is empty once all elements have been iterated, PASS

//if stack is not empty, FAIL

let test = '[[fart]]{}'

function multiBracketValidation(input) {

  let inputArr =  input.match(/[[{(\]})]/g);
  console.log(inputArr);
  let stack = new Stack;
  let closing = new RegExp(/[\]})]/g);

  inputArr.forEach((item) =>{
    if(closing.test(item)){
      //if closing bracket, peek at stack
      let top = stack.peek();
      if ((item ===']'&& top ==='[') || (item ==='}'&& top ==='{')|| (item ===')'&& top ==='(')){
        console.log(`match: top: ${top} closing:${item}`);
        stack.pop();
        console.log('top after popping:', stack.peek());
      }else{
        console.log('FAIL');
        
      }
    }else{
      console.log('top before pushing:', stack.peek());
      console.log('pushed!', item);
      stack.push(item);
      console.log('top after pushing:', stack.peek());
    }
    stack.peek();
  });
  

}

multiBracketValidation(test);

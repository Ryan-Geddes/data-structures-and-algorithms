'use strict';

const fs = require('fs');


/* 
  Write a function called isEven that receives 2 parameters:
    A Number
    A Callback function

  Determine if the number is even. If so, invoke the callback with 
  true as an argument, otherwise, false

  -----

  Create an array of numbers.

  Iterate the array with a for loop, each time calling the 
  isEven function with the number and a callback
  
  The callback should console.log() the return value from isEven()

*/
let arr = [1,4,3,5,6,4,2,3];

function isEven (num, cb){
  if (num % 2 === 0){
    cb(true);
  }
  else {
    cb(false);
  }


}

let callback = status => {
  return console.log(status);
};


arr.forEach((num)=>{
  isEven(num, callback);
});

/* 
  Write a function called contents that receives 1 parameter:
    A File Name

  Using the fs module, open and read the contents of the 
  file,converting them to text and printing the content to the console.

  Print a console.error() if anything goes wrong.

  You can test this by calling your function with './words.txt', 
  which is a file that exists, and then again with the name of a 
  file that does not exist.
*/


function contents (file){

  fs.readFile(file, (err, data)=>{
    if(err){throw err;}
    else{ 
      let string = data.toString();
      // let contents = Buffer.from(string);
      console.log('this is string', string)}

  });
}

contents('words.txt');

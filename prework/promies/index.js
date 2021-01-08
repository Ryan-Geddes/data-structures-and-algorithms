'use strict';

const superagent = require('superagent');

/* 
  Write a function called isEven that receives 1 parameter:
    A Number
  
  And returns a Promise

  Determine if the number is even. If so, 
  resolve the promise with a value of true,
   otherwise, reject it with a value of false

  ------

  Create an array of numbers.

  Iterate the array with a for loop, each time 
  calling the isEven function with the number and a callback
  
  The callback should console.log() the return value from isEven()

*/

let array = [1,3,6,69,420];

function isEven (number, cb) {
  
  return new Promise( (resolve, reject) =>{
    if(number % 2 === 0){resolve(true);}
    else{reject(false);}
  });

}

let callback = status => {
  return console.log(status);
};

array.forEach(num =>{
  isEven(num, callback(num))
    .then( status => console.log ('SUCCES', status))
    .catch(err => console.error('ERROR:', err));
});

/* 
  Write a function called getCharacters
  
  When invoked, make a superagent call to the Star Wars API

  With the retuned data, change the results 
  into an object where the key is the character's
   name and the value is the URL to their page
  
  Output this JSON object
*/


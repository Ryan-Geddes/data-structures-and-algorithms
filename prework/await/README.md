async/await - Demo Code
'use strict';
const superagent = require('superagent');

let checkForWords = (words) => new Promise( (resolve,reject) => {

  let pauseTime = Math.ceil(Math.random()*1000);

  setTimeout( () => {
    if( words )  { resolve(`OK: ${words} / ${pauseTime}`) }
    else  { reject(`BAD: ${words} / ${pauseTime}`) }
  }, pauseTime)

});

// Using an old fashioned promise ...
checkForWords('coffee')
  .then( result => console.log(result) )
  .catch( console.error );


// Using an async function!
async function check(text) {
  try {
    let result = await checkForWords(text);
    console.log(result);
  } catch(e) { console.error(err); }
}

// These will happen out of order (returned in the order they complete)
for( let i = 1; i<=10; i++ ) {
  check(i);
}

// These will be collected in order of creation
async function doMany() {
  let thingsToDo = [];
  for( let i = 1; i<=10; i++ ) {
    thingsToDo.push(checkForWords(i));
  }

  let results = await Promise.all(thingsToDo);
  console.log(results);
}

doMany();

async function getStuff() {
  let results = await superagent.get('http://demo8340031.mockable.io/stuff');
  console.log(results.body);
}

getStuff();


Readings: Async/Await
Below you will find some reading material, code samples, and some additional resources that will help you to better understand asynchronous Javascript, specifically Promises

Watch the Shred Talk Video: Async/Await
Review the Demo Code
Complete the Assignment
Javascript Async/Await Pattern
Promises, although a big improvement over Callbacks for asynchronous functionality, still have a slightly messy syntax that can be confusing, especially when nesting. With ES6, Javascript introduced the async / await pattern to add even more syntactic sugar on promises.

Here’s a simple function that returns a promise, and a standard call that invokes that function, and uses .then() and .catch() to interact with it.

function goAndGetSomeData() {
  return new Promise( (resolve,reject) => {
    if( true ) {
      resolve("It totall worked!");
    }
    else {
      reject("Failure is always an option...");
    }
  })
}

goAndGetSomeData(params)
  .then( someData => {
    // do something with someData
  })
  .catch( error => {
    // do something with the error
  });
Here’s another way to call that function, but using an async function instead of the .then() syntax…You simply tag a function as async and then within it, await the promise to happen. Effectively, the variable you assign to the await is the same thing you would have gotten in a .then() callback. This just looks a lot nicer.

async function getData() {
  let someData = await goAndGetSomeData()
  // do something with someData
}

getData();
Handling Errors can be done in 2 ways.

If you want to handle the error in the async function, you wrap the call in a try{}/catch()

async function getData() {
  try {
    let someData = await goAndGetSomeData()
    // do something with someData
  } catch(error) {
    // handle the error
  }
}

getData()
Alternatively, you can handle the error in the code that calls your function, you can deal with it as you please outside of the async function call.

   async function getData() {
      let someData = await goAndGetSomeData()
      // do something with someData
   }

   getData().catch(error => console.log(error));
Additional Resources
Video: what the heck is the event loop anyway
MDN - async/await
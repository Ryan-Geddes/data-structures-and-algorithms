Requirements
Standard Callback
Write a function called isEven that receives 2 parameters:

A Number
A Callback function
Determine if the number is even. If so, invoke the callback with true as an argument, otherwise, false

Create an array of numbers.

Iterate the array with a for loop
At each iteration, call the isEven function with the number and a callback function
The callback should console.log() the return value from isEven()
Reading a file, using an Error First Callback
Write a function called contents that receives 1 parameter: A File Name

Using the fs module, open and read the contents of the file
Convert the contents to text
Output the content to the console.
Output a console.error() if anything goes wrong.
You can test this by calling your function with ‘./words.txt’ which is a file that exists, and then again with the name of a file that does not exist.

Assignment Submission Instructions
Submit a link to your completed REPL


Readings: Callbacks
Watch the Shred Talk: Callbacks
Review the Demo Code
Complete the Assignment
Javascript Callback Pattern
Node.js made the decision to have all asynchronous events be handled using error first callbacks. The main advantage of this is that all asynchronous methods have a consistent interface. This means that when you are working with asynchronous Node.js code, you can always assume how the callback is going to be formatted, making your life as a developer much easier!

Having a consistent callback interface has also made it possible for libraries to be written that assist Javascript developers in handling complex async code!

A callback says, “Hey, Javascript, you go ahead do some work. I don’t care how long it takes, and I’m going to go ahead and keep on working … but when you’re all done, here’s a function I want you to run.”

That function is the callback, and it operates on a nicely standardized signature.

Defining an Error First Callback
a callback is simply a function that is passed as an argument to another function
“error first” callbacks have the function signature (err, result) => {}
the first parameter is reserved for an error
the value will be null or undefined if there is no error
the second callback is reserved for any successful response data
the value will be null or undefined if there is no data
not every Node.js method passes data into the callback
in methods that do not resolve data, success is defined as a lack of an error
Additional Resources
Video: what the heck is the event loop anyway
error first callbacks
fs module docs
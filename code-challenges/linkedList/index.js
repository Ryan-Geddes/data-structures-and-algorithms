'use strict';
const util = require('util');
const LL = require('./linked-list.js');

let list = new LL();
let list2 = new LL();

list.append(1);
list.append(3);
list.append(5);
list.append(7);
list.append(9);

list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);
list2.append(10);


// list.includes('third');
// list.includes('second');
// list.includes('fartman');

// console.log('list before', list);
// list.insertBefore(3,5);
// console.log(util.inspect(list, {showHidden:false, depth: null}));

list.zipper(list, list2);
console.log(util.inspect(list, {showHidden:false, depth: null}));
console.log(util.inspect(list2, {showHidden:false, depth: null}));
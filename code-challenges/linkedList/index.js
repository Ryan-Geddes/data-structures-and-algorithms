'use strict';

const LL = require('./linked-list.js');
let list = new LL();

list.append('first');
list.append('second');
list.append('third');
list.prepend('new head');
list.prepend('new head2');


list.includes('third');
list.includes('second');
list.includes('fartman');

console.log(list.toString());
//console.log('constructed list:', list);
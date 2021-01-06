

const LL = require('./linked-list.js');
const util = require('util');

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

function zipper(list1, list2){
  let current = list1.head;
  let temp = current.next;
  let current2 = list2.head;
  let temp2;
//   console.log('list1head', current.value);
//   console.log('list2head', current2.value);
//   console.log('current.next.val', current.next.value);

  while(current.next){

    temp2 = current2.next;
    // console.log('temp ', temp.value);
    // console.log('temp 2', temp2.value);
    current.next = current2;
    // console.log('current.next ', current.next.value);
    current2 = temp2;
    // console.log('current2', current2.value);
    current = current.next;
    // console.log('current ', current.value);
    current.next = temp;
    current = current.next;
    temp = current.next;
    // console.log('temp line43', temp);

  }

  current.next = current2;
  current = current.next;
  current.next = temp;
  return list1;
}


zipper(list, list2);
console.log(util.inspect(list, {showHidden:false, depth: null}));
console.log(util.inspect(list2, {showHidden:false, depth: null}));
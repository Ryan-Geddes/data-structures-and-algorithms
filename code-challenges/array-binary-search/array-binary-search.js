'use strict';

// Write a function called BinarySearch which takes in 2 parameters: 
//a sorted array and the search key. Without utilizing any of the built-in
// methods available to your language, return the index of the array’s element 
//that is equal to the search key, or -1 if the element does not exist.
// NOTE: The search algorithm used in your function should be a binary search.
// Check the Resources section for details


function binarySearch(array, value){
  //navigate to midpoint
  //compare value at midpoint index
  //if midpoint is greater than value
  //  slice big half of array,
  //else 
  //  slice small half of array
  //repeat until value is found or array length is 1
  //need to keep track of length
  let index = 0;
  while(array.length > 1){
    let midpoint = Math.round(((array.length-1)/2));
    console.log('midpoint', midpoint);
    if(array[midpoint] === value){
      console.log(index, midpoint)
      index = index + midpoint;
      return index;
    }
    if(array[midpoint] > value){
      console.log('array[midpoint]',array[midpoint]);
      console.log('index >',index);
      array = array.slice(0, midpoint);
    }
    if (array[midpoint]  < value){
      index = (array.length - midpoint) + index -1;
      console.log('index <',index);
      array = array.slice(midpoint, array.length)
    }

  }
  if (array[0] === value){
    return index;
  }else{
    return -1;
  }

}

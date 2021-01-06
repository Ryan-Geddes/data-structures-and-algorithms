'use strict';

//Practice writing this data structure from scratch!
//but put in a fully fleshed out version for future reference here!


//import linked list
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor(node){
      this.head = node;
  }

  append(keyValueNode){
    if (!this.head){
      let node = new Node(keyValueNode);
      this.head = node;
    }else{
      let current = this.head;
        while(current.next){
          current = current.next
        }
      current.next = node;
    }
  }

  find(key){
    if (!this.head){
      return 'bucket is empty - find(key) failed'
    }else{
      let current = this.head;
      while(current){
        let val = current.value;
        if(val.value[key]){
          let output = Object.values(current.value);
          return output[0];
        }else{
          current = current.next;
        }
      }
    }
  }
}

class HashTable{
  constructor(size, ){
    //size = number of buckets
    this.size = size;
    // this sets up a new array, each index is a bucket with a LL in it.
    this.storage = new Array(size);
    //count tracks how many buckets have LLs in them
    this.count = 0;
  }

  hash(key){
    //convert key into integer
    return key.split('').reduce((acc, cur, i) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
    //'hash' that key, google this, simplest method, just multiply by prime number.  Google why always prime numbers
    //return hash, 
      //verify hash is between 0 and end of array
      // % hash by array size, this will convert huge hashes to fit in your array

  }

  get(key){
    //navigate to array[hash(key)]
    let bucket = this.hash(key) + 1;
    let list = this.storage[bucket];
    if (list){
      //traverse LL searching for key
      let output = list.find(key);
      //return value
      output = Object.values(output)[0]
      return output;
      //contain this in an if to verify bucket is not empty
    }else{
      return 'empty bucket'
    }

  }

  set(key, value){
    //navigate to array[hash(key)]
    let bucket = this.hash(key);
    if (this.storage[bucket]){
      let list = this.storage[bucket];
      let node = new Node({key:value});
      list.append(node);
      // console.log(node);
    }else{
      let obj = {[key]:value}
      let list = new LinkedList;
      let node = new Node(obj);
      list.append(node);
      this.storage.splice(bucket, 0, list);
    }

    //check to see if something exists there

    //if it does, append a node containing the key AND the value to the LL

    //if not, create new linked list with key AND value as root

  }

  contains(key){
    //same as get, just return t/f
    let bucket = this.hash(key) + 1;
    let list = this.storage[bucket];
    if(list){
      if (list.find(key)){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }

  }

  containsKey(){

  }

  isEmpty(){
    //returns true false
  }

  keys(){
    //Returns an enumeration of the keys in this hashtable.
  }

}


module.exports = HashTable;
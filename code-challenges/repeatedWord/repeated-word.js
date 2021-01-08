let a = 'Once upon a time, there was a brave princess who...';
let it = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
let summer = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';



// built in methods solution:

function repeatedWords(string){
  let map = new Map();
  var regged = string.replace(/[’.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
  let final = regged.replace(/\s{2,}/g,' ');
  let arr = final.split(' ');

  for(let i = 0; i < arr.length; i++){
    let word = arr[i].toLowerCase();
    let occurences = 0;
    if (map.has(word)){
      return word;;
    }else{
      map.set(word, occurences);
    }
  };

}



console.log(repeatedWords(a));
console.log(repeatedWords(it));
console.log(repeatedWords(summer));


//custom hashtable implementation solution:

const Hashmap = require('../hashtable/hashtable.js');

function customHashRepeatedWords(string){
  let map = new Hashmap();
  var regged = string.replace(/[’.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
  let final = regged.replace(/\s{2,}/g,' ');
  let arr = final.split(' ');

  for(let i = 0; i < arr.length; i++){
    let word = arr[i].toLowerCase();
    let occurences = 0;
    if (map.has(word)){
      return word;;
    }else{
      map.set(word, occurences);
    }
  };

}

console.log(customHashRepeatedWords(a));
console.log(customHashRepeatedWords(it));
console.log(customHashRepeatedWords(summer));
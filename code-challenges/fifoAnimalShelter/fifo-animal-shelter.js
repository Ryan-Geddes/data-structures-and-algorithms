'use strict';

// Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
// Implement the following methods:
// enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
// dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

let dog =
  {
    species: 'dog',
    name: 'fido'
  };

let cat =
  {
    species: 'cat',
    name: 'niko'
  };



class AnimalShelter{
  constructor(){
    this.list = [];
    this.length = 0;
  }

  enqueue(animal){
    this.list.push(animal);
    this.length++

  }

  dequeue(pref){
    if (pref !== 'cat' && pref !== 'dog'){
      return null;
    }
    let temp = 0;
    let length = this.length;
    for (let i = 0; i < length; i++){
      let critter = this.list.shift();
      if(critter.species === pref){
        length--;
        for (let i = 0; i < (length-temp); i++){
          let animal = this.list.shift();
          this.enqueue(animal);
        }
        return critter;
      }else{
        this.enqueue(critter);
        temp++;
      }
    }
    return `Shelter contains no ${pref}s :(`;
  }
}

let shelter = new AnimalShelter;

shelter.enqueue(cat);
shelter.enqueue(cat);
shelter.enqueue(dog);
shelter.enqueue(cat);
shelter.enqueue(dog);

console.log(shelter.dequeue('man'))
console.log(shelter.dequeue('dog'))
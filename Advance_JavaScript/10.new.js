// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof!`;
//   }
//   sleep() {
//     return `${this.name} is sleeping`;
//   }
// }

// function Dog(name, breed) { // constructor function
//   this.name = name;
//   this.breed = breed;
//   this.bark = function() {
//     return `${this.name} says woof!`;
//   };
//   this.sleep = function() {
//     return `${this.name} is sleeping`;
//   }
// }

/** Prototype objects */

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// Dog.prototype.bark = function () {
//   return `${this.name} says woof!`;
// }

// Dog.prototype.sleep = function() {
//   return `${this.name} is sleeping`;
// }

/** Prototype Chain */

// const grandparent = {
//   sing() {
//     return `LA LA LA`;
//   }
// }

// const parent = {
//   color: 'red',
//   greet() {
//     return `Hi There!!`;
//   },
//   __proto__ : grandparent // prototype chain
// }

// const child = {
//   name: 'Child',
//   __proto__: parent // prototype chain

// }

/** Classes, Inheritance, Prototype */

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `${this.name} says woof!`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
}

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed);
    this.owner = owner;
  }

  alert() {
    console.log(`${this.name} is alert you, the dog is trained`);
  }
}

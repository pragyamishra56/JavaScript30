// class MyMath {
//   static add(a,b) {
//     return a+b;
//   }
//   static multiply(a,b) {
//     return a * b 
//   }
// }

//  Here is to use static methods as factories functions that generates new instances

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  meow() {
    return `${this.name} says meow.`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

function registerStray() {
  const names = ["Muffin", "Biscuit", "Sleepy", "Fluffy", "Whiskers"];
  const name = choice(names);
  return new Cat(name, "unknown");
}

// console.log(registerStray().meow());
//  direct access with function


// ****** With Static Method
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = ["Muffin", "Biscuit", "Sleepy", "Fluffy", "Whiskers"];
    const name = choice(names);
    return new Cat(name, "unknown");
  }
  meow() {
    return `${this.name} says meow.`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

//  console.log(Cat.registerStray().meow());
//  indirect access with static method
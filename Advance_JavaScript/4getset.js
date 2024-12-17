class User {
  constructor(firstName, lastName) {
    this.firstName = firstName; // public and can access u.firstName or u.lastName
    this.lastName = lastName;   // const u = new User("Tina", "Lee");
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.firstName = first
    this.lastName = last;
  }
}

 
// Public Fields 
class Cat {
  static numOfCats = 0;
  name;
  breed;
  numLegs = 4;
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }
  amputate() {
    this.numLegs -= 1;
  }
}

// Private Fields
/** Private instance class fields provide a way to maintain encapsulation or hide details of an object from the outside world. 
 * and allow external access
 */

class Circle {
  // _radius;  // private field it says _ don't touch to the outside world
  #radius; // That indicates to JS that this is a private class field
  constructor(radius) {
    // this._radius = radius;
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
}

// const myCircle = new Circle(10);
// console.log(myCircle.#radius) /**Property '#radius' is not accessible outside class 'Circle' because it has a private identifier. */

const myCircle = new Circle(10);
console.log(myCircle.getRadius()); // indirectly accessing the private field 
// but directly accessing the private field is not allowed like myCircle.#radius



//*** */ 2nd example to clarify the concept of private fields

class MyClass {
  #privateMethod() {
    console.log("Private method called!!");
  }

  publicMethod() {
    this.#privateMethod();
  }
}

const myClass = new MyClass();
// myClass.#privateMethod(); // it cannot access directly the private method
myClass.publicMethod(); // it can access the private method through the public method




/**  ES2022 Static */

class DatabaseConnection {
  static connection;
  // process.env.NODE_ENV === "production" 
  // ? this.loadDevelopmentConnection() 
  // : this.loadProductionConnection(); // this is not allowed in ES2022

  static {
    if (process.env.NODE_ENV === "production") {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }


  static loadProductionConnection() {
    //
  }
  static loadDevelopmentConnection() {
    //
  }
}
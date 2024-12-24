// const person = {
//   name: "Rachael",
//   city: "New York",
//   occupation: "Software Engineer",
//   sing: function() {
//     return `${this.name} sings LA LA LA`;
//   }
// };

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  static getRandomCat() {
    console.log("This is: ", this);
  }

  dance(style = "salsa") { 
    console.log("This is:", this);
    return `Meow, I am ${this.firstName}` + `and I love to dance ${style}`;
  }
}

// let fDance = fluffy.dance;
// call on fluffy, passing "tango" as arg
// fDance.call(fluffy, "tango");

/** LeftOfTheDot */

function whatIsThis() {
  console.log("The value of this is: ", this);
}
const obj = {
  color: "blue",
  age: 3,
  whatIsThis: whatIsThis,
};


/** The Call Method */

const rachael = {
    name: "Rachael",
    city: "New York",
    occupation: "Software Engineer",
    sing: function() {
      console.log("This is: ", this);
      return `${this.name} sings LA LA LA`;
    }
};

const lisa = {
  name: "Lisa",
  city: "Chicago",
}



// call on lisa, passing lisa as this
// rachael.sing() 
/* "This is: ", rachael  {name: rachael, city: "New York", occupation: "Software Engineer", sing: ƒ}
Rachael sings LA LA LA */
// rachael.sing.call(lisa)
/* "This is: ", lisa  {name: lisa, city: "Chicago"}
Lisa sings LA LA LA */




/** The Apply Method */ // this method that has to do with THIS keyword
// apply is similar to call, but it takes an array of arguments instead of individual arguments
//  it is similar to call and the main difference is in how it handles arguments

const ringo = {
  firstName: "Ringo",
  greet: function(greeting, punctuation) {
    console.log(`${this.firstName} says ${greeting}${punctuation}`);
  }
};

const rika = {
  firstName: "Rika",
  lastName: "Stevens",
};

const nums = [1, 5, 3, 7, 95, 2];

function maximum() {
  console.log(arguments);
  return Math.max.apply(null, arguments);
}

ringo.greet.call(rika, "Hello", "!!!"); // Rika says Hello!!!
ringo.greet.apply(rika, ["Hello", "!!!"]); // Rika says Hello!!!



// Bind Method "You can perma-bind a function to a context"
// bind() is a method on functions that returns a bound copy of the function, with a given this value and initial arguments
// bind is similar to call and apply, but it returns a new function that has its THIS keyword

const conan = {
  name: "Conan",
  city: "Chicago",
  sing: function() {
    console.log("This is ", this);
    return `${this.name} sings LA LA LA`;
  },
};

const liza = {
  name: "Liza",
  city: "New York",
};

const lisaSing = conan.sing.bind(lisa); // bind returns a new function 


/** Binding Arguments */
// bind allows you to pass arguments to the new function that is returned
//  it is similar to call and apply, but it returns a new function that has its THIS
//  keyword and arguments
// you can also bind arguments to functions. That will bake them into the function.

// "null" here means it doesn't matter what the this is, it will be ignored

// 1st example of bind arguments
function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

const applyDelhiSalesTax = applySalesTax.bind(null, 0.0725);
const applyGoaSalesTax = applySalesTax.bind(null, 0);

// 2nd example of bind arguments
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

const alwaysNine = multiply.bind(null, 3, 3);
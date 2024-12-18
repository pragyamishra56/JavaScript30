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
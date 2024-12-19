// Arrow functions don't make their own "this" context, so we need to bind it
// Arrow function: they do not get their own new value for the keyword 
// this the value of the keyword


class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}`); // works, obvs this.firstName is undefined 

    setTimeout(function () {
      console.log("This is: ", this);
      console.log(`#2: I am ${this.firstName}`); // doesn't work, this
    }, 500);

    setTimeout(() => {
      console.log("This is: ", this);
      console.log(`#3: I am ${this.firstName}`); // works, this is bound
    }, 1000);
  }
}

let kitty = new Cat("Kitty");
kitty.superGreet();
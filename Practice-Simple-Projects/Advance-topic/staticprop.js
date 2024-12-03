class User {
  constructor(username) {
    this.username = username // instance property
  }

  logMe() { // this is a Instance method; har object (like alluka, iphone) isse call kar sakta hai
    console.log(`Username: ${this.username}`);
  }


  static createId() { // this is a Static method; sirf class (User ya Teacher) ke saath call hoti hai.
    return `123` // Static method (only accessible via class)
  }
}

const alluka = new User("alluka")
// console.log(alluka.createdId())

class Teacher extends User {
  constructor(username, email) {
    super(username) // Parent (User) class ka constructor call karta hai
    this.email = email // New property for Teacher class
  }
}


// Static method usage
console.log(User.createId()); // Output: 123
// console.log(Teacher.createdId()); // Error: createdId is not a function

// Instance method call
const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); // Static method call via class, createId() ko instance se call kar rahe the, jo allowed nahi hai. Isko class ke saath call karna chahiye.
iphone.logMe(); // Instance method call via instance; Output: "Username: iphone"

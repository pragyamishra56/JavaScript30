const user = {
  username: "Saitama",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function() {
    // console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
  }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function() {
    console.log(`Welcome ${this.username}`);
  }
  // return this;
}

const user1 = new User("Saitama", 12, true);
const user2 = new User("Eren", 11, false);
console.log(user1);
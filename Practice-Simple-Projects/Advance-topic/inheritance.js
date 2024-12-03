// step --> 1. Anime Class
class Anime {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}


// step --> 2. Sensei Class (Inheritance)
class Sensei extends Anime {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addMoves() {
    console.log(`A new Moves was added by ${this.username}`);
  }
}


// step --> 3. Objects and Method Calls
const sensei = new Sensei("saitama", "saitama@gmail.com", "12345");

sensei.logMe()
const sensei2 = new Sensei("markrov")

sensei2.logMe()


// step --> 4. instanceof Operator
console.log(sensei instanceof Anime);
// console.log(sensei === Anime);
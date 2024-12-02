function SetUsername(username) {
  // complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username)

  this.email = email
  this.password = password
}

const natsu = new createUser("Natsu", "natsu@example.com", "dragon");
console.log(natsu);
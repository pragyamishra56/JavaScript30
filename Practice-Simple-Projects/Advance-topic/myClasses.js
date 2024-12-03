// ES6 Class Approach

class Anime {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`
  }
}

const anime = new Anime("saitama", "saitama@gmail.com", "123")

console.log(anime.encryptPassword());
console.log(anime.changeUsername());


// Behind the scene
// Traditional Constructor Function Approach

function Anime(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Anime.prototype.encryptPassword = function() {
  return `${this.password}abc`
}
Anime.prototype.changeUsername = function() {
  return `${this.username.toUpperCase()}`
}

const cartoon = new Anime("shinchain", "shinchain@gmail.com", "123")

console.log(cartoon.encryptPassword());
console.log(cartoon.changeUsername());


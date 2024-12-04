class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value
  }

  get password() {
    return `${this._password}saitama`;
  }

  set password(value) {
    this._password = value
  }
}

const saitama = new User('saitama@example.com', 'ghjh')
console.log(saitama.email);
console.log(saitama.password);
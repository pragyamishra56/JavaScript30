const User = {
  _email: 's@st.com',
  _password: "abcd",

  get email() {
    return this._email.toUpperCase()
  },
  set email(value) {
    this._email = value
  },

  get password() {
    return this._password
  },
  set password(value) {
    this._password = value
  }
}

const saitama = Object.create(User)
console.log(saitama.email);
console.log(saitama.password);
let myHeros = ["Saitama", "Hyakkimaru"];

let heroPower = {
  Saitama: "Serious Punch",
  Hyakkimaru: "Heavenly Head",
}

Object.prototype.pragya = function () {
  console.log(`pragya is present in all objects`);
}

Array.prototype.heyPragya = function () {
  console.log(`Pragya says konichiwa`);
}

// heroPower.pragya(); // Error: pragya is not a function
// myHeros.pragya(); // pragya is present in all objects
// myHeros.heyPragya(); // Output: Pragya says konichiwa
// heroPower.heyPragya(); // Error: heroPower.heyPragya is not a function


// *** Inheritance ****

const Adiyogi = {
  name: "Shiva",
  email: "shiva@kailash.com"
}

const Sadhguru = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Sadhguru.__proto__ = Adiyogi

// modern syntax
Object.setPrototypeOf(TeachingSupport, Sadhguru)

let anotherGuruname = "Patanjali"

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherGuruname.trueLength()
"pragya".trueLength();
"mishra".trueLength();
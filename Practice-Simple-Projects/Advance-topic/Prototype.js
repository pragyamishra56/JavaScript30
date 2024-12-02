let myHeros = ["Saitama", "Hyakkimaru"];

let heroPower = {
  Saitama: "Serious Punch",
  Hyakkimaru: "Heavenly Head",
}

Object.prototype.pragya = function () {
  console.log(`pragya is present in all objects`);
}

// heroPower.pragya();
myHeros.pragya();
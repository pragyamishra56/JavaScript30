// Advance Object Concept

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const soup = {
  name: "Tomato Soup",
  price: 250,
  isAvailable: true,

  orderSoup: function() {
    console.log("Soup is not available");
  }
}

console.log(Object.getOwnPropertyDescriptor(soup, "name"));

Object.defineProperty(soup, 'name', {
  // writable: false,
  enumerable: true,
})


console.log(Object.getOwnPropertyDescriptor(soup, 'name'));

// for (const element of object) {
  
// } // forof

for (let [key, value] of Object.entries(soup)) {
  if(typeof value !== 'function') {
    console.log(`${key} : ${value}`);
  }
}
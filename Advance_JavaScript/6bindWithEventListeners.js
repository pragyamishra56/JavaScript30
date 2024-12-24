const conan = {
  name: "Conan",
  city: "Doylestown",
  sing: function() {
    console.log("This is:", this);
    console.log(`${this.name} sings LA LA LA`);
  }
};



const btn = document.querySelector("#clickMe");

// btn.addEventListener("click", function() {
//   console.log("Button clicked");
// });

btn.addEventListener("click", conan.sing.bind(conan)); // bind conan to the function so it knows who is singing
// btn.addEventListener("click", conan.sing); // this will not work because this will be the button and not conan
// btn.addEventListener("click", conan.sing.bind(conan)); // this will work because we are binding conan to the function so it knows who is singing
btn.addEventListener("click", conan.sing.call(conan)); // we don't execute the function, we provide a function for it to later call.
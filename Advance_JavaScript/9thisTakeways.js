class CounterGame {
  constructor(initialCount, buttonElement) {
    this.count = initialCount;
    this.button = buttonElement;
    // this.button.addEventListener("click", this.incrementCount); // it won't work "NaN"
    // this.button.addEventListener("click", this.incrementCount.bind(this)); // it will work same as the arrow function 
    this.button.addEventListener("click", () => this.incrementCount()); // it will work with arrow function
  }
  incrementCount() {
    this.count += 1;
    console.log(this.count);
  }
}

const btn = document.querySelector('#clickMe');
const counter = new CounterGame(1, btn);

const btn2 = document.querySelector('#clickMe2');
const counter2 = new CounterGame(100, btn2);
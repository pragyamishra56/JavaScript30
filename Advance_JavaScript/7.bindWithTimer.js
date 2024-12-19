class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }
  // start() {
  //   setInterval(
  //     function () {
  //       console.log(this); // logs the global object
  //       console.log(this.count); 
  //       this.count += this.incrementAmt;
  //     }.bind(this),
  //     1000
  //   );
  // }

  /** To look code more cleaner */
  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
  }

  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmt;
  }
}
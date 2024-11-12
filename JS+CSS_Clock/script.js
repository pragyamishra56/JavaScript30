const model = {
  initialDegreeAdjustment: 90, // initial state is horizontal, we rotate it by 90 degree to make it point to 12 o'clock
  degreePerHour: 360 / 12,
  degreePerMinSec: 360 / 60,

  returnTimeObject() {
    const now = new Date()
    const hours = now.getHours()
    const mins = now.getMinutes()
    const seconds = now.getSeconds()


    return {
      hours,
      mins,
      seconds,
    }
  }
}

const view = {
  setClock() {
    setInterval(this.render, 1000)
  },

  render() {
    // get time data
    const now = model.returnTimeObject()

    //set the clock graphic
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand')

    
    const hourDegree = model.initialDegreeAdjustment + now.hours * model.degreePerHour;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    const minDegree = model.initialDegreeAdjustment + now.mins * model.degreePerMinSec
    minHand.style.transform = `rotate(${minDegree}deg)`

    const handDegree = model.initialDegreeAdjustment + now.seconds * model.degreePerMinSec
    secondHand.style.transform = `rotate(${handDegree}deg)`

    // set clock text
    const hourDisplay = document.querySelector('.hour-display');
    const minDisplay = document.querySelector('.min-display');
    const secDisplay = document.querySelector('.sec-display');
    hourDisplay.textContent = view.renderClockText(now.hours);
    minDisplay.textContent = view.renderClockText(now.mins);
    secDisplay.textContent = view.renderClockText(now.seconds);
    console.log(hourDisplay)
  },


  renderClockText(input) {
    return input.toString().padStart(3, '0');
  }
}

view.setClock()
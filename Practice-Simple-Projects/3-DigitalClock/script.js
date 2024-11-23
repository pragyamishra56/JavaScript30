const clock = document.getElementById('clock');
// document.querySelector('#clock') is the same as document.getElementById('clock')

setInterval(function () {
  let date = new Date(); // this is not necessary, we can use Date.now()

  // console.log(date.toLocaleTimeString()); // This will print the time in 12-hour format with AM/PM
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
const randomColor = function () { 
  const hex = '0123456789ABCDEF'; // 16 possible characters
  let color = '#';
  for (let i =0; i < 6; i++) { // 6 is the number of characters in a hex code
    color += hex[Math.floor(Math.random() * 16)]; // pick a random character from the hex string
  }
  return color; // returns a random hex color
}; // end randomColor function

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000); // change color every 1 second
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor(); // <--- BUG INTRODUCED HERE
  }
};

const stopChangingColor = function() {
  clearInterval(intervalId); // <--- Clear the interval
  intervalId = null;  // to prevent memory leak
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor)
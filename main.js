import myText from './kearon.mjs';

let text = myText();
console.log(text);
text = text.replace(/\r?\n|\r/g, ' ');
const array = text.split(' ');
const header = document.querySelector('[data-header]');
const button = document.querySelector('[data-button]');
button.addEventListener('click', rotate);
let count = 0;
let time = 0;

console.log(header);
function rotate() {}

const fast = 50;
const slow = 1000;
let speed = fast;

setTimeout(myTimer, array[0].length * speed);

let myInterval = setInterval(myTimer, speed);

function myTimer() {
  header.textContent = array[count];
  if (array[count].includes('\n')) {
    speed = slow;
    clearInterval(myInterval);
    myInterval = setInterval(myTimer, speed);
  }

  if (array[count].includes('.') || array[count].includes('?')) {
    speed = slow;
    clearInterval(myInterval);
    myInterval = setInterval(myTimer, speed);
  } else {
    speed = fast;
    clearInterval(myInterval);
    myInterval = setInterval(myTimer, array[count].length * speed);
  }
  header.style.color = '#' + count / 4;
  count++;
  if (count == array.length) {
    clearInterval(myInterval);
  }
}

console.log(array.length);
let totalTime = 0;

for (let index = 0; index < array.length; index++) {
  totalTime += array[count].length * 168;
}

console.log(totalTime / 1000);

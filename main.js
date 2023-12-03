let text;
let array;
const startButton = document.querySelector('[data-button]');
const body = document.querySelector('[data-body]');
const header = document.querySelector('[data-header]');
const textarea = document.querySelector('[data-textarea]');
const textareaContainer = document.querySelector('.textarea');
startButton.addEventListener('click', generate);
let count = 0;
let time = 0;

const fast = 50;
const slow = 1000;
let pace;
let speed = fast;
let mode = 'dark';
let myInterval;

if (mode == 'dark') {
  body.style.backgroundColor = 'black';
}

function generate() {
  document.body.requestFullscreen();
  text = textarea.value;
  textarea.style.display = 'none';
  startButton.style.display = 'none';
  textareaContainer.style.display = 'none';
  header.style.display = 'block';
  header.style.color = 'white';
  text = text.replace(/\r?\n|\r/g, ' ');
  text = text.replace('-', ' ');
  array = text.split(' ');
  console.log(new Date());
  myInterval = setInterval(myTimer, slow);
}

function myTimer() {
  header.textContent = array[count];
  if (array[count] < 5) {
    pace = 4;
  } else {
    pace = array[count].length;
  }
  if (array[count].includes('\n')) {
    speed = slow;
    clearInterval(myInterval);
    myInterval = setInterval(myTimer, speed);
  }

  if (
    array[count].includes('.') ||
    array[count].includes('?') ||
    array[count].includes(',')
  ) {
    speed = slow;
    clearInterval(myInterval);
    myInterval = setInterval(myTimer, speed);
  } else {
    speed = fast;
    clearInterval(myInterval);
    myInterval = setInterval(myTimer, pace * speed);
  }
  if (mode == 'light') {
    header.style.color = '#' + count / 4;
  } else if (mode == 'dark') {
    header.style.color = '#' + (999999 - count / 4);
    body.style.backgroundColor = 'black';
  }
  count++;
  if (count == array.length) {
    clearInterval(myInterval);
    console.log(new Date());
    setTimeout(exitProgram, 2000);
  }
}

function exitProgram () {
  document.exitFullscreen();
  textarea.style.display = 'block';
  startButton.style.display = 'flex';
  textareaContainer.style.display = 'flex';
  header.style.display = 'none';
}

// console.log(array.length);
// let totalTime = 0;

// for (let index = 0; index < array.length; index++) {
//   totalTime += array[count].length * 168;
// }

// console.log(totalTime / 1000);

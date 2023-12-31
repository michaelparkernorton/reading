const fast = 50;
let updateSpeed = fast;
let speed = fast;

window.addEventListener('click', function () {
  window.location.reload();
});
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') window.location.reload();
  else console.log('user leaves the page');
});
document.body.onkeydown = function (e) {
  if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
    document.body.requestFullscreen();
  }
  if (e.key == 's' || e.code == 'KeyS' || e.keyCode == 83) {
    // Stop the program
    clearInterval(myInterval);
    document.exitFullscreen();
    header.style.display = 'none';
  }
  if (e.key == 'ArrowLeft' || e.code == 'ArrowLeft' || e.keyCode == 37) {
    updateSpeed += 1;
    console.log(updateSpeed);
  }
  if (e.key == 'ArrowRight' || e.code == 'ArrowRight' || e.keyCode == 39) {
    updateSpeed -= 1;
    console.log(updateSpeed);
  }
};
window.onmousemove = function (event) {
  document.body.style.cursor = 'default';
  // do something when the mouse moves
};

// const textarea = document.querySelector('[data-textarea]');
// const startButton = document.querySelector('[data-button]');
let text;
navigator.clipboard
  .readText()
  // .then((clipText) => (textarea.textContent = clipText))
  .then((value) => {
    text = value;
    console.log(text);
  });

let array;
const body = document.querySelector('[data-body]');
const header = document.querySelector('[data-header]');
// const textareaContainer = document.querySelector('.textarea');
// startButton.addEventListener('click', generate);

let count = 0;
let time = 0;

const slow = 800;
let pace;

let mode = 'dark';
let myInterval;

if (mode == 'dark') {
  body.style.backgroundColor = 'black';
}
// textarea.style.display = 'none';
// textareaContainer.style.display = 'none';

// generate();
// document.body.style.cursor = 'pointer';
setTimeout(generate, 5);

function generate() {
  // text = textarea.value;
  // startButton.style.display = 'none';
  document.body.style.cursor = 'none';
  header.style.display = 'block';
  header.style.color = 'white';
  if (text == '') {
    text = 'no text in clipboard';
  }
  text = text.replace(/\r?\n|\r/g, ' ');
  text = text.replace('-', ' ');
  array = text.split(' ');
  console.log(new Date());
  myInterval = setInterval(myTimer, slow);
}

let number = 0;
let change = 0;
let hex;
function myTimer() {
  document.body.style.cursor = 'none';
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
    speed = updateSpeed;
    clearInterval(myInterval);
    myInterval = setInterval(myTimer, pace * speed);
  }
  if (mode == 'light') {
    header.style.color = '#000000';
  } else if (mode == 'dark') {
    // change = count/1000;
    number = 11393254 - change;
    hex = number.toString(16);
    header.style.color = '#' + hex;
    body.style.backgroundColor = 'black';
  }
  count++;
  if (count == array.length) {
    clearInterval(myInterval);
    console.log(new Date());
    setTimeout(exitProgram, 2000);
  }
}

function exitProgram() {
  document.exitFullscreen();
  // textarea.style.display = 'block';
  // startButton.style.display = 'flex';
  // textareaContainer.style.display = 'flex';
  header.style.display = 'none';
}

// console.log(array.length);
// let totalTime = 0;

// for (let index = 0; index < array.length; index++) {
//   totalTime += array[count].length * 168;
// }

// console.log(totalTime / 1000);

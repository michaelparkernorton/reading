window.addEventListener('visibilitychange', () =>{
    if (document.visibilityState === 'visible') window.location.reload();
    else console.log('user leaves the page')
})
const textarea = document.querySelector('[data-textarea]');
const startButton = document.querySelector('[data-button]');
let text;
navigator.clipboard
.readText()
.then((clipText) => (textarea.textContent = clipText))
.then(value => {
  text = value
  console.log(text);
});

let array;
const body = document.querySelector('[data-body]');
const header = document.querySelector('[data-header]');
const textareaContainer = document.querySelector('.textarea');
startButton.addEventListener('click', generate);

document.body.onkeydown = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    generate();
  }
}

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
textarea.style.display = 'none';
textareaContainer.style.display = 'none';

function generate() {
  document.body.requestFullscreen();
  // text = textarea.value;
  startButton.style.display = 'none';
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
  // textarea.style.display = 'block';
  startButton.style.display = 'flex';
  // textareaContainer.style.display = 'flex';
  header.style.display = 'none';
}

// console.log(array.length);
// let totalTime = 0;

// for (let index = 0; index < array.length; index++) {
//   totalTime += array[count].length * 168;
// }

// console.log(totalTime / 1000);

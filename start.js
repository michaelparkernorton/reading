window.addEventListener('click', function () {
  window.location.reload();
});
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') window.location.reload();
  else console.log('user leaves the page');
});

const paragraph = document.querySelector('[data-paragraph]');

navigator.clipboard
  .readText()
  // .then((clipText) => (textarea.textContent = clipText))
  .then((value) => {
    if (value == '' || value.includes('\n')) {
      paragraph.textContent = 'Please copy something to your clipboard';
    } else {
      paragraph.textContent = value;
    }
    console.log(text);
  });

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

test();

const waitFiveHundred = async () => {
  console.log('500 start!');
  setTimeout(() => {
    console.log('500 passed!');
  }, 500)
}

function test() {
  console.log('yeet!');
  waitFiveHundred.then(console.log('done!'))
}
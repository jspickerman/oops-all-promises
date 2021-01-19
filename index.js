// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const waitFiveHundred = async () => {
  setTimeout(() => {
    return '500 passed!';
  }, 5000)
}

function test() {
  console.log('yeet!');
  console.log('500 start!');
  waitFiveHundred().then(console.log('done!'));
}

test();
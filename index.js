// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const waitFor = (delay) => {
  console.log('waiting for ' + delay + ' ms');
  return new Promise(resolve => setTimeout(resolve, delay))
};

async function test() {
  console.log('yeet!');
  waitFor(5000).then(() => console.log('done!'));
  const holdUp = await waitFor(7500);
  console.log(holdUp);
}

test();
// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const waitFor = (delay) => {
  console.log('waiting for ' + delay + ' ms');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay)
  })
};

async function test() {
  console.log('yeet!');
  const holdUp5000 = waitFor(5000);
  holdUp5000.then((timeout) => console.log(timeout));

  const holdUp7500 = await waitFor(7500);
  console.log(holdUp7500);

  const holdUp8500 = await waitFor(8500);
  console.log(holdUp8500);

  const holdUp9500 = await waitFor(9500);
  console.log(holdUp9500);
}

test();
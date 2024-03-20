const btpressed = document.getElementById('pressed');
const highscr = document.getElementById('hsc');
const curnscr = document.getElementById('csc');

let counter = 0;
let high = 0;
let chance = 0;

function handleButtonClick(event) {
  counter++;
  chance++;
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber < chance) {
    counter = 0;
    chance = 0;
  }
  if (counter >= high) {
    high = counter;
  }

  updateScore();
}

function updateScore() {
  document.querySelector('#display').querySelector("#curnscr").innerText = counter;
  document.querySelector('#display').querySelector("#highscr").innerText = high;
}

btpressed.addEventListener('click', handleButtonClick);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault();
      document.getElementById('pressed').click();
    }
});
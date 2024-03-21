const btpressed = document.getElementById('pressed');
const highscr = document.getElementById('hsc');
const curnscr = document.getElementById('csc');
const rchance = document.getElementById('rchance');

let counter = 0;
let high = 0;
let chance = 0;
let kbpres = 0;

/* Cookies function */

// Updates de value of the High Score cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

// Function to upadte the high score when the pages load
function checkCookie() {
  const highScoreCookie = getCookie('highScore');
  if (highScoreCookie) {
    high = parseInt(highScoreCookie);
    updateScore();
  }
}

/**/

function handleButtonClick(event) {
  counter++;
  chance++;
  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber < chance) {
    counter = 0;
    chance = 0;
  }
  if (counter >= high) {
    high = counter;
    setCookie('highScore', high);
  }

  updateScore();
}

function updateScore() {
  document.querySelector('#display').querySelector("#curnscr").innerText = counter;
  document.querySelector('#display').querySelector("#highscr").innerText = high;
  document.querySelector('#display').querySelector("#rchance").innerText = chance;
}

btpressed.addEventListener('click', handleButtonClick);

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space')
    kbpres++;
  if (kbpres == 1)
    document.getElementById('pressed').click();
  if (event.code === 'KeyP')
    document.getElementById('pressed').click();
});

document.addEventListener('keyup', function(event) {
  kbpres = 0;
});
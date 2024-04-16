let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    displayMessage(`you entered invalid number`);
  } else if (guess < 1) {
    displayMessage(`please enter number greater than 0`);
  } else if (guess > 100) {
    displayMessage(`please enter number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};
const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage("you guessed correct");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("your entered number is too hight");
  } else if (guess < randomNumber) {
    displayMessage("your entered number is too low");
  }
};
const displayMessage = (message) => {
  lowOrHi.innerHTML = `${message}`;
};
const displayGuess = (guess) => {
  userInput.value = ``;
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};
const endGame = () => {
  userInput.value = "";
  // here the game end's and user cannot enter further
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};
const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = ``;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
};

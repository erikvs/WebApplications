// Getting placement for numbers to guess.
const numbersUl = document.getElementById('numbers');
// Getting placement for guesses.
const guessUl = document.getElementById('guess');
// Getting button to submit guesses.
const button = document.querySelector('button');
// List of numbers to sort.
const numbers = [1, 3, 2];

// Getting all guesses.
const getGuess = () => {
  const answers = document.querySelectorAll('input');
  return Array.from(answers).map((answer) => answer.value);
};

// Function for checking guessed sequence is correct or false.
const checkNumberSeq = () => {
  const guess = getGuess();
  let isCorrect = numbers.sort().join('') === guess.join('');
  if (isCorrect) {
    alert('Du sorterte riktig');
  }
  if (!isCorrect){
    alert('Du sorterte feil');
  }
};

// Function for adding fields to guess input.
const addInputUI = () => {
  for (let num of numbers) {
    const li = `<li><input></input></li>`;
    guessUl.innerHTML += li;
  }
};

// Function for presenting the list of numbers to guess order of.
const addNumbersUI = () => {
  for (let num of numbers) {
    const li = num;
    numbersUl.innerHTML += `<li>${li}</li>`;
  }
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

button.addEventListener('click', checkNumberSeq);

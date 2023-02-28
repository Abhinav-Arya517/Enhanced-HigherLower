let secretNumber;
let previousGuesses = [];
let maxNumber;

function startGame() {
  maxNumber = prompt("Enter a maximum number:");
  while (maxNumber <= 0 || isNaN(maxNumber)) {
    maxNumber = prompt("Enter a valid number greater than 0:");
  }
  maxNumber = Math.round(maxNumber);
  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  document.getElementById("instructions").innerHTML = "Guess a number between 1 and " + maxNumber;
}

function guessNumber() {
  let guess = document.getElementById("guess").value;
  if (isNaN(guess)) {
    document.getElementById("feedback").innerHTML = "That is not a number!";
    return;
  }
  guess = Math.round(guess);
  if (guess < 1 || guess > maxNumber) {
    document.getElementById("feedback").innerHTML = "That number is not in range, try again.";
    return;
  }
  if (previousGuesses.includes(guess)) {
    document.getElementById("feedback").innerHTML = "You already guessed that number!";
    return;
  }
  previousGuesses.push(guess);
  let feedback = "";
  if (guess === secretNumber) {
    feedback = "You got it! It took you " + previousGuesses.length + " tries and your guesses were " + previousGuesses.join(", ") + ".";
  } else if (guess < secretNumber) {
    feedback = "Too low, try again!";
  } else {
    feedback = "Too high, try again!";
  }
  document.getElementById("feedback").innerHTML = feedback;
  document.getElementById("previousGuesses").innerHTML = "Previous guesses: " + previousGuesses.join(", ");
}
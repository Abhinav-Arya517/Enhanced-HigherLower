// Prompt the user for the maximum number
let maxNum;

do {
  maxNum = Math.round(parseFloat(prompt("Enter the maximum number:")));

  if (maxNum < 1 || isNaN(maxNum)) {
    alert("Invalid input. Please enter a positive number.");
  }
} while (maxNum < 1 || isNaN(maxNum));

// Set up the game variables
let targetNum = Math.floor(Math.random() * maxNum) + 1;
let currentGuess;
let numGuesses = 0;
let guessList = [];

// Define a function to validate the user's guess
function validateGuess(guess) {
  // Check if guess is a number
  if (isNaN(guess)) {
    alert("That is not a number!");
    return false;
  }

  // Check if guess is out of range
  if (guess < 1 || guess > maxNum) {
    alert(`That number is not in range, try again (1-${maxNum}).`);
    return false;
  }

  return true;
}

// Define a function to prompt the user for their guess and validate it
function getGuess() {
  let guess;

  do {
    guess = parseInt(prompt(`Guess a number between 1 and ${maxNum}`));
  } while (!validateGuess(guess));

  currentGuess = guess;
  numGuesses++;
  guessList.push(guess);
}

// Call the getGuess function to prompt the user for their first guess
getGuess();

// Use a while loop to keep prompting the user until they guess correctly
while (currentGuess !== targetNum) {
  if (currentGuess > targetNum) {
    alert("Your guess is too high. Try again.");
  } else {
    alert("Your guess is too low. Try again.");
  }

  getGuess();
}

// Construct the victory message with the number of guesses and the list of guesses
let victoryMsg = `You got it! It took you ${numGuesses} tries and your guesses were ${guessList.join(", ")}.`;

// Display the final message with the number of guesses and the list of guesses
alert(victoryMsg);


 
 
 
 
 
 
 
 
 
 
 
 
 /*let maxNum;
do {
  maxNum = parseInt(prompt("Enter a maximum number for the guessing game:"));

  // Check if input is valid
  if (isNaN(maxNum) || maxNum <= 0) {
    alert("Invalid input. Please enter a positive number.");
  }
} while (isNaN(maxNum) || maxNum <= 0);

// Round input if it is a decimal
maxNum = Math.round(maxNum);

let numGuesses= 0;
                                                                                        // outputting the number for clarity
console.log(maxNum);
message.innerHTML = "Enter a number between 1 and " +maxNum;

function do_guess() {                                                                   // do signicies it is an action function, tells a user that it is an event, clicking on a button
    let guess = Number(document.getElementById("guess").value);                           //chaining
    numGuesses++;
    let message = document.getElementById("message");


 if (guess == maxNum) {
    message.innerHTML = "<br> Correct guess! You guessed the number in " +numGuesses + " attempt(s).";

 }
 else if (guess > maxNum) {
    message.innerHTML = "<br> Try a lower number";
 }
 else {
message.innerHTML = "<br>Try a higher number";
 }
}
*/
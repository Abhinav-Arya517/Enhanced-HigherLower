let maxNum = 0;
let secretNum = 0;
let guessList = [];

function getValidMaxNum() {
    let input = prompt("Please enter the maximum number:");
    let num = Math.round(Number(input));
    while (num <= 0 || Number.isNaN(num)) {
        input = prompt("Please enter a valid positive number:");
        num = Math.round(Number(input));
    }
    maxNum = num;
    document.getElementById("instructions").textContent = `Guess a number between 1 and ${maxNum}.`;
    secretNum = Math.floor(Math.random() * maxNum) + 1;
}

function submitGuess() {
    let guessInput = document.getElementById("guess").value;
    let guess = Math.round(Number(guessInput));
    if (Number.isNaN(guess)) {
        document.getElementById("output").textContent = "That is not a number!";
        return;
    }
    if (guess < 1 || guess > maxNum) {
        document.getElementById("output").textContent = "That number is not in range, try again.";
        return;
    }
    if (guessList.includes(guess)) {
        document.getElementById("output").textContent = "You have already guessed that number.";
        return;
    }
    guessList.push(guess);
    if (guess === secretNum) {
        let output = `You got it! It took you ${guessList.length} tries and your guesses were ${guessList.join(", ")}.`;
        document.getElementById("output").textContent = output;
    } else if (guess < secretNum) {
        document.getElementById("output").textContent = "Too low, try again.";
    } else {
        document.getElementById("output").textContent = "Too high, try again.";
    }
}

getValidMaxNum();

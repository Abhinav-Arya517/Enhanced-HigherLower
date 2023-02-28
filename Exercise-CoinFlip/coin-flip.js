function flip(guess) {
    //random number
    let result = Math.floor(Math.random() * 2) +1;

    //get message paragraph
    let message = document.getElementById("message");
    //check the result of the random vs guess
    if (result ==1) { //Heads
        if (guess == "heads") {
            message.innerHTML = "<br>You guess heads. <br>The coin flips and comes up heads! <br>Good Guess!";
        }
        else {
            message.innerHTML = "<br>You guessed tails. <br> The coin flips and comes up heads! <br>Try again!";
        }
    }
    else { //tails
        if (guess == "tails") {
            message.innerHTML = "<br>You guessed tails. <br> The coin flips and comes up tails! <br>Good guess!";
        }
        else {
            message.innerHTML = "<br>You guessed heads. <br> The coin flips and comes up tails! <br>Try again!";
        }
    }
}
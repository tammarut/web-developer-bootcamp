//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess)

// typeof = check type variable
alert(guess + typeof guess);

//check if guess is right
if (guess === secretNumber) {
  alert("You got it right!");
}
//check if guess is higher
else if (guess > secretNumber) {
    alert("Too high, guess agein")
}
//otherwise, check if lower
else {
    alert("Too low, guess again")
}

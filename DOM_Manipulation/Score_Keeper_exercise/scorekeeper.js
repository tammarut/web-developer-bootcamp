var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var gameOver = false;

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScore");
var winningScore = 5;

var resetButton = document.getElementById("reset");

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            p2Display.classList.add("lose");
            gameOver = true;
        }
    }
});

p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            p1Display.classList.add("lose");
            gameOver = true;
        }
    }
});

resetButton.addEventListener("click", function() {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.classList.remove("lose");
    p2Display.classList.remove("lose");
    gameOver = false;
}

numInput.addEventListener("change", function() {
    // change winningScoreDisplay
    winningScoreDisplay.textContent = numInput.value;
    //update winningScore
    //Convert value(string) to int
    winningScore = Number(numInput.value);
});

var numSquares = 6;
var colors = [];
//Pick(DOM) .square class are array
var squares = document.querySelectorAll(".square");
//Picked color from array to display on h1 (answer)
var pickedColor;
//Pick(DOM) id colorDisplay(span tag in h1)
var colorDisplay = document.getElementById("colorDisplay");
//Pick(DOM) show "Correct" or "Try Again"
var messageDisplay = document.querySelector("#message");
//Pick(DOM) wanna change background color
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
   setupModeButtons();
   setupSquares();
   reset();
}

function setupModeButtons() {
   for (var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function() {
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         this.classList.add("selected");

         this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
         reset();
      });
   }
}

function setupSquares() {
   for (var i = 0; i < squares.length; i++) {
      //Add click listener to squares
      squares[i].addEventListener("click", function() {
         //Grab color of clicked square
         var clickColor = this.style.backgroundColor;
         //Compare color to pickedColor
         if (clickColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColor(clickColor);
            h1.style.backgroundColor = clickColor;
         } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
         }
      });
   }
}

function reset() {
   //generate all new colors
   colors = generateRandomColors(numSquares);
   //pick a new random color from array
   pickedColor = pickColor();
   //change colorDisplay to match picked Color
   colorDisplay.textContent = pickedColor;
   //change colors of squares
   for (var i = 0; i < squares.length; i++) {
      //If there is a color that matches that square and for the first three there will be.
      if (colors[i]) {
         squares[i].style.display = "block";
         //So we set background color to be the color from the array
         squares[i].style.backgroundColor = colors[i];
      } else {
         //other colors[i] are null then set display none
         squares[i].style.display = "none";
      }
   }
   h1.style.backgroundColor = "steelblue";
   resetButton.textContent = "New Colors";
   messageDisplay.textContent = "";
}

//TODO: click button to reset game(random color squares)
resetButton.addEventListener("click", function() {
   reset();
});

function changeColor(color) {
   //Loop through all squared
   for (var i = 0; i < squares.length; i++) {
      //Change each color to match given color
      squares[i].style.backgroundColor = color;
   }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
   //make an array
   var arr = [];
   //Add num random colors to array
   for (var i = 0; i < num; i++) {
      //get random colors and push into arr
      arr.push(randomColor());
   }
   //return that array
   return arr;
}

//random rgb color and return rgb(r, g, b) format
function randomColor() {
   //pick "red" from 0-255
   var r = Math.floor(Math.random() * 256);
   //pick "green" from 0-255
   var g = Math.floor(Math.random() * 256);
   //pick "blue" from 0-255
   var b = Math.floor(Math.random() * 256);

   //return rgb(r, g, b) format
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

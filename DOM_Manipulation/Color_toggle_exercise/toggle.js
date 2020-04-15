var button = document.querySelector("button");
//index "isPurple"
// var isPurple = false;
// button.addEventListener("click", function() {
//   // if white change to purple
//   if (isPurple) {
//     document.body.style.background = "white";
//   } else {
//     // else make it white
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// });

//Solution 2: Use property.classList.toggle(CSSclass)
button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});

//TODO: DOM solution
// const btn = document.querySelector("#request");
// const bio = document.querySelector("#bio");

// const request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//    if (request.readyState === 4) {
//       bio.style.border = "1px solid #e8e8e8";

//       if (request.status === 200) {
//          bio.innerHTML = request.responseText;
//       } else {
//          bio.innerHTML = "An error occurred during your request" + request.status + request.statusText;
//       }
//    }
// };

// request.open("get", "https://baconipsum.com/api/?type=meat-and-filler");

// btn.addEventListener("click", function () {
//    this.style.display = "none";  
//    request.send();
// });

//TODO: jQuery solution
$(document).ready(function () {
   //select by id
   const $btn = $("#request");
   const $bio = $("#bio");

   function completeFunction(response, textStatus, request) {
      $bio.css("backgroundColor", "#FFFF00");

      if (textStatus === "error") {
         $bio.text("An error occurred during your request" + request.status + request.statusText);
      }
   };

   // The event when user clicked the button
   $btn.on("click", function () {
      // hide button
      $(this).hide();

      $bio.load("https://baconipsum.com/api/?type=meat-and-filler", completeFunction);
   })
})
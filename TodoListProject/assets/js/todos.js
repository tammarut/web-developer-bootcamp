// Check off Specific Todos By Clicking
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function (event) {
   // remove entire that li
   $(this).parent().fadeOut(500, function () {
      $(this).removeEventListener()
   }); 
   event.stopPropagation();
});

$("input[type=text]").keypress(function (event) {
   if (event.which === 13) {
      // grabbing new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      // create a new li and add to ul
      $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
   }
});

$(".fa-plus").click(function () {
   $("input[type='text'").slideToggle();
});
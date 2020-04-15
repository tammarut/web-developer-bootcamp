$("button").click(function() {
   // $("div").fadeToggle(500);
   $("div").slideToggle(500, function() {
      console.log("slide is Done!");
      $(this).remove();
   });
});

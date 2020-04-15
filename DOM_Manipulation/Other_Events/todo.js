var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
   //Mouse hover
   lis[i].addEventListener("mouseover", function() {
      this.classList.add("selected");
   });

   //Mouse hover out
   lis[i].addEventListener("mouseout", function() {
      this.classList.remove("selected");
   });

   lis[i].addEventListener("click", function() {
      this.classList.toggle("done");
   });
}

console.log("todos.js connected successfully");

// NEW ELEMENT
$(".fa-edit").on("click", function(){
   $("input[type=text]").fadeToggle();
})

$("input[type=text]").on("keypress", function(event){
   if(event.charCode === 13){
      var newToDo = $(this).val();
      $("ul").append("<li><span><i class=\"fas fa-minus-circle\"></i></span>" + newToDo + "</li>");
      $(this).val("");
   }
})

// CHECKING OFF A li
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

/* Alternative w/o <li>s
$("input[type=checkbox]").on("click", function(){
   $(this).toggleClass("completed");
});
*/

// REMOVING A li
$(".fa-trash-alt").on("click", function(){
   $("span").toggleClass("deleteMode");
})

$("ul").on("click", "span", function(event){
   $(this).parent().slideUp(400, function(){
      $(this).remove();
   });
   // so clicking in the span doesn't activate the li clicked code:
   event.stopPropagation();
})

// CHANGING THEME
$("input[type=radio]").on("click", function(event) {
   // Defaults are restored
   $("form").css("color", "#ffffff");
   $("h2").removeClass("h2_dark");
   $("span").removeClass("span_dark");
   
   if($(this).val() === "day") {
      $("body").removeClass("night");
      $("body").addClass("day");
   }
   else if ($(this).val() === "night") {
      $("body").removeClass("day");
      $("body").addClass("night");
      $("h2").addClass("h2_dark");
      // Night Mode stuff
      $("span").addClass("span_dark");
      // $("li:nth-of-type(2n)").addClass("li_dark");
      // $("li:nth-of-type(2n+1)").addClass("li_dark_alt");
      // $("#text_input").addClass("input_text_dark");
   }
   else {
      $("body").removeClass("day");
      $("body").removeClass("night");
      $("form").css("color", "#505050");
   }
})

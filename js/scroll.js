// vanilla javascript
// var blockquote = document.getElementById('blockquote');
// var quoteHeight = document.getElementById('quote').scrollHeight;
// var animateQuote = function() {
//   blockquote.classList.add("endorsement_quote_animated");
// };
// var evalHeight = function() {
//   if (window.scrollY*4 >= quoteHeight) {animateQuote();}
// };
// document.addEventListener("scroll", evalHeight, false);

// jquery
$(document).ready(function(){
  var $quoteHeight = $("#quote").position().top;

  $(window).scroll(function(){
    if ($(window).scrollTop() >= $quoteHeight) {
      $("#blockquote").addClass("endorsement_quote_animated");
    }
  });

});

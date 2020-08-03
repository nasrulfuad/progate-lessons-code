$(function() {
  // Add the hover() method for #language-wrapper
  $('#language-wrapper').hover(
    function() {
      $('.language-text').fadeIn();
    },
    function() {
      $('.language-text').fadeOut();
    }
  );
  
});
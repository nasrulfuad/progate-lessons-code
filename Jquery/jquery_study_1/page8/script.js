$(function() {
  // Add a click() method for #change-text
  $("#change-text").click(function() {
    $('#text').text('Hello, Progate!');
  });
  
  // Add a click() method for #change-html
  $('#change-html').click(function() {
    $('#text').html('<a href="https://progate.com/">Hello, Progate!</a>');
  });
  
});
$(function() {
  $('.btn').click(function() {
    // Assign the jQuery object for #title to the $title variable
    var $title = $('#title');
    
    // Rewrite the following using the $title variable:
    $title.css('color', 'red');
    $title.html('Goodbye, Ken!');
    $title.fadeOut(1000);
    
    // Rewrite the following using method chaining:
    $('#text').css('color', 'blue').html('<h3>See you soon!</h3>').fadeOut(1000);
  });
});
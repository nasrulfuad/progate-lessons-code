$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    
    // Declare the clickedIndex variable and assign it the value of the button that is clicked
    var clickedIndex = $('.index-btn').index($(this));
    
    // Replace the eq method's argument with the clickedIndex variable
    $('.slide').eq(clickedIndex).addClass('active');
    
  });
});

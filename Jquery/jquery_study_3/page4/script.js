$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
  });
  
  $('.change-btn').click(function() {
    // Declare the $displaySlide variable
    var $displaySlide = $('.active');
    
    // Remove the active class from the $displaySlide variable
    $displaySlide.removeClass('active');
    
    // Use an if-else statement to add the active class to either
    // the element before or after the $displaySlide
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    
  });
});

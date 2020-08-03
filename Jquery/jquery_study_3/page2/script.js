$(function() {
  $('#second-btn').click(function() {
    // Remove the active class from the .active element
    $('.active').removeClass('active');
    
    // Add the active class to the 2nd .slide element
    $('.slide').eq(1).addClass('active');
    
  });
});

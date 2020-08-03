$(function() {
  
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });
  
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  // Add the hover() method for .lesson-hover
  
  $('.lesson-hover').hover(function() {
    
  }, function() {
    
  });
  
});

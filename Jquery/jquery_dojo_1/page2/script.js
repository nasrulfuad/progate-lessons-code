$(function() {

  // Signup modal
  
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson').hover(function() {
    $(this).find('.text-contents').addClass('text-active');
  }, function() {
    $(this).find('.text-contents').removeClass('text-active');
  });
  

});

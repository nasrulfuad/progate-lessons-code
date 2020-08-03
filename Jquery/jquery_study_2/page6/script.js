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
  
  $('.lesson-hover').hover(
    function() {
      // Find the "text-contents" elements, then add the "text-active" class
      $(this).find('.text-contents').addClass('text-active');
      
    },
    function() {
      // Find the "text-contents" elements, then remove the "text-active" class
      $(this).find('.text-contents').removeClass('text-active');
      
    }
  );
});

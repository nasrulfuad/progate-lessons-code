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
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open').slideUp();
      // Use the slideUp() method to hide $answer
      $answer.slideUp();
      
      // Find the <span> elements inside, then rewrite the content using the text() method
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // Use the slideDown() method to show $answer
      $answer.slideDown();
      
      // Find the <span> elements inside, then rewrite the content using the text() method
      $(this).find('span').text('-');
      
    }
  });
});

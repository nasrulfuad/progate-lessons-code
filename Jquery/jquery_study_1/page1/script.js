$(function() {
  $('#welcome-btn').click(function() {
    $('#welcome-btn, #welcome-wrapper').fadeOut(200);
    $('.modal-wrapper').fadeIn(500);
  });
  
  $('#read-more').click(function() {
    $('.important').css('color', 'red');
    $('#more-text').slideDown();
    $('#read-more').hide();
    $('#image-wrapper').slideUp();
  });
  
  $('#start').click(function() {
    $('#description-wrapper').hide();
    $('#start-wrapper').fadeIn(1500);
  });
});
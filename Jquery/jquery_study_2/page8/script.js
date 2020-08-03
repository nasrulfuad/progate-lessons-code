$(function() {

  $("#login-show").click(function() {
    $("#login-modal").fadeIn();
  });

  $(".signup-show").click(function() {
    $("#signup-modal").fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $(".lesson-hover").hover(
    function() {
      $(this).find(".text-contents").addClass("text-active");
    },
    function() {
      $(this).find(".text-contents").removeClass("text-active");
    }
  );
  
  // Add the click() method for .faq-list-item
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');

    if($answer.hasClass('open')) {
      $answer.removeClass('open');
    } else {
      $answer.addClass('open');
    } 
  });
  
  
});

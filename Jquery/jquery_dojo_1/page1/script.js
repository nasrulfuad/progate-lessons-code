$(document).ready(function() {
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });
});
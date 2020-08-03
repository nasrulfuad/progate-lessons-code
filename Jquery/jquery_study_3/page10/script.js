$(function() {
  
  // Create a submit event for the #form element
  $('#form').submit(function() {
    var textValue = $('#text-form').val();
    $('#output-text').text(textValue);
    return false;
  });
    
});
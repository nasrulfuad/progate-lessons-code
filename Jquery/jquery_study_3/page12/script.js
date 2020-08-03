$(function() {
  $('#form').submit(function() {
    var selectValue = $('#select-form').val();
    var textValue = $('#text-form').val();
    
    // Display an error when textValue is empty
    if (textValue == '') {
      $('#error-message').text("Please enter a reason!");
    } else {
      $('#error-message').text("");
      $('#output-select').text(selectValue);
      $('#output-text').text(textValue); 
    }
    return false;
  });
});
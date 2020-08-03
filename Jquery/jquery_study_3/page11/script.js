$(function() {
  $('#form').submit(function() {
    // Declare the selectValue variable
    var selectValue = $('#select-form').val();
    
    var textValue = $('#text-form').val();
    //  Replace the text of the #output-select element with the value of the selectValue variable
    
    
    $('#output-text').text(textValue);
    $('#output-select').text(selectValue);
    return false;
  });
});
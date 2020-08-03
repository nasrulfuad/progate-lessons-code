$(function() {
  $('#form').submit(function() {
    var selectItem = $('#select-form').val();
    var textItem = $('#text-form').val();
    if (textItem == '') {
      $('#error-message').text('Please enter a reason!!');
    } else {
      $('#error-message').text('');
    }
    $('#output-select').text(selectItem);
    $('#output-text').text(textItem);
    return false;
  });

  // Create a click event for the .option-btn element
  $('.option-btn').click(function() {
    var optionText = $(this).text();
    $('#text-form').val(`${optionText} is my favorite because ...`);
  });
  
});
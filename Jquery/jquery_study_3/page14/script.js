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

  $('.option-btn').click(function() {
    var optionText = $(this).text();
    // When it is clicked, store the value of the data-option element in the clickedOption variable
    var clickedOption = $(this).attr('data-option');
    
    $('#text-form').val(optionText + ' is my favorite because ...');
    // Use the clickedOption to automatically enter the value for the #select-form
    $('#select-form').val(clickedOption);
    
  });
});
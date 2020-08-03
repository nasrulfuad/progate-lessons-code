$(function() {
  var title = $('#title').text();
  // Declare 2 variables
  var id = $('.section-content p').attr('id');
  var href = $('#link').attr('href');

  $('#title-text').text(title);
  // Use the text method to display each of the variables
  $('#content-id').text(id);
  $('#link-href').text(href);
  
});
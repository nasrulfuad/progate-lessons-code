$(function() {
  $('#find-method').click(function() {
    // Use the find() method to get all the <a> elements inside #wrapper,
    // then change the color to red using the css() method
    $('#wrapper').find('a').css('color', 'red');
    
    
  });
  
  $('#children-method').click(function() {
    // Use the children() method to get the <a> elements directly inside #wrapper,
    // then hide them using the fadeOut() method
    $('#wrapper').children('a').css('color', 'red').fadeOut();
    
  });
});
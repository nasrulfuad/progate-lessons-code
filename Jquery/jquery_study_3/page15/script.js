$(function(){
  
  // When the cursor is hovering over the .social-icon element, make the font-size 30px
  // And change the font-size to 24px when cursor stops hovering over the element
  $('.social-icon').hover(function() {
    $(this).animate({
      'font-size': '30px'
    }, 300);
  }, function() {
    $(this).animate({
      'font-size': '24px'
    }, 300);
  });
  
});
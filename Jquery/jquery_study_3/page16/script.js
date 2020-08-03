$(function(){
  
  // Social media button
  $('.social-icon').hover(
    function(){
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );
  
  // When the #top-btn element is clicked,
  // Scroll to the top of the page automatically
  $('#top-btn').click(function(){
    $('html, body').scrollTop(0);
  });
  
});
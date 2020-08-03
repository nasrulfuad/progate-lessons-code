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
  
  // Button to go to the top of the page
  $('#top-btn').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0 
    }, 'slow');
  });
  
  // Create a click event for when <a> tags in the header are clicked
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });
  
});
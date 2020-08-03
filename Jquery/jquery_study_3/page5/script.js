$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index(this);
    $('.slide').eq(clickedIndex).addClass('active');
    
    // 1. Store the index number of the .active element in the slideIndex variable
    var slideIndex = $('.slide').index($('.active'));
    
    // 3. Display the change-btn element
    $('.change-btn').show();
    
    // 2. Use an if-else statement to hide/show the .change-btn element
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if(slideIndex == 3) {
      $('.next-btn').hide();
    }
    
  });
  
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    
    // Write the same process as the click event for index-btn
    var slideIndex = $('.slide').index($('.active'));

    $('.change-btn').show();

    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if(slideIndex == 3) {
      $('.next-btn').hide();
    }
    
  });
});

var num = 380;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navfix-none').addClass('navfix');
    } else {
        $('.navfix-none').removeClass('navfix');
    }
});

//slider

var currIndex;
$('.slider-item:first').fadeIn();
$('.bullets').click(function() {
//   $('.bullets').removeClass('act');
//   $(this).addClass('act');
  currIndex = $(this).index()+1;
 
  $('.slider-item').fadeOut(0);
  $('.slider-item:nth-child('+currIndex+')').fadeIn();
});

//jquery animation
$('.hide').css({display:' none'});
$('body,.card,.fa-list').css({
  backgroundColor:'black',
  color:'white'
})
$('.card').css({
  boxShadow:'rgba(247, 247, 247, 0.2) 0px 1px 4px'
})
$('.navbar-toggler').css({
  backgroundColor:'transparent',
})

$(document).ready(function () {
  $('.text-md').fadeIn(2000, function () { 
  });
    $('.text-md').fadeOut(2000, function () {
      $('.hide').fadeIn(1000);
    });
    
});

$("#search").click(function () {
  $(".input,.search-btn").fadeIn(200);
  $("#search").animate({
    opacity: '-=1',
  }, 200);

});

$('.nav-form').mouseleave(function () {
  $(".input,.search-btn").fadeOut(200);
  $("#search").animate({
    opacity: '+=1',
  }, 200);
});

$('.far.fa-sun').click(function () { 
  $('.fa-sun').addClass('fas');
  $('.fa-sun').removeClass('far');
  $('.fa-moon').addClass('far');
  $('.fa-moon').removeClass('fas');
  $('body,.card,.fa-list').css({
    backgroundColor:'white',
    color:'black'
  })
  $('.ico-soc,.card').css({
    boxShadow:'rgba(247, 247, 247, 0.12) 0px 1px 3px, rgba(247, 247, 247, 0.24) 0px 1px 2px'
  })
  $('.navbar-toggler').css({
    backgroundColor:'transparent',
  })
});
$('.fa-moon').click(function () { 
  $('.fa-sun').addClass('far');
  $('.fa-sun').removeClass('fas');
  $('.fa-moon').addClass('fas');
  $('.fa-moon').removeClass('far');
  $('body,.card,.fa-list').css({
    backgroundColor:'black',
    color:'white'
  })
  $('.ico-soc,.card').css({
    boxShadow:'rgba(247, 247, 247, 0.12) 0px 1px 3px, rgba(247, 247, 247, 0.24) 0px 1px 2px'
  })
  $('.navbar-toggler').css({
    backgroundColor:'transparent',
  })
});


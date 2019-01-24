$(document).ready(() => {
  $('.navbar-items').on('mouseenter', event => {
    $(event.currentTarget).animate({
      fontSize: '24px',
      textDecoration: 'none'
    }, 200)
  });

  $('.navbar-items').on('mouseleave', event => {
    $(event.currentTarget).animate({
      fontSize: '16px'
    }, 200)
  });

  $('.icons').on('mouseenter', event => {
    $(event.currentTarget).animate({
      fontSize: '100px'
    }, 200);
  });

  $('.icons').on('mouseleave', event => {
    $(event.currentTarget).animate({
      fontSize: '64px'
    }, 200)
  });

  /* cards services */
  $(".card-des1").on('mouseenter', event => {
    $(".details1").slideToggle();
  }).on('mouseleave', event => {
    $(".details1").slideToggle();
  });

  $(".card-des2").on('mouseenter', event => {
    $(".details2").slideToggle();
  }).on('mouseleave', event => {
    $(".details2").slideToggle();
  });

  $(".card-des3").on('mouseenter', event => {
    $(".details3").slideToggle();
  }).on('mouseleave', event => {
    $(".details3").slideToggle();
  });

  $(".card-des4").on('mouseenter', event => {
    $(".details4").slideToggle();
  }).on('mouseleave', event => {
    $(".details4").slideToggle();
  });

  $(".card-des5").on('mouseenter', event => {
    $(".details5").slideToggle();
  }).on('mouseleave', event => {
    $(".details5").slideToggle();
  });

  $(".card-des6").on('mouseenter', event => {
    $(".details6").slideToggle();
  }).on('mouseleave', event => {
    $(".details6").slideToggle();
  });
});






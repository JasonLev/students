$(function() {
  // Smooth scroll
  $('nav a').click(function(e) {

    e.preventDefault();

    var thisTarget = $(this).attr('href'),
        targetOffset = $(thisTarget).offset().top;
    if (thisTarget === "#classes") {
      targetOffset = 0;
    }
    $('body, html').animate({
      scrollTop: targetOffset
    }, 400);
  });
});

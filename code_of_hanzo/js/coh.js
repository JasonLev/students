$(function() {
  $("#agendas > button").click(function() {
    slideUpThenShow('.agendas', '#agendaSection > button');
  });

  $("#hw > button").click(function() {
    slideUpThenShow('.homework', '#hw > button');
  });

  $("#exercises > button").click(function() {
    slideUpThenShow('.topics', '#topicsExercises > button');
  });

  function slideUpThenShow(liClass, buttons) {
    $(liClass).slideUp();
    var btnClicked = event.currentTarget;
    var btnIndex = $(btnClicked).index(buttons);
    $(liClass+":eq("+btnIndex+")").show(1000);
  }
  //change nav when scrolling
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $("img#hanzo").height() +
                                                       $nav.parent().height() +
                                                       parseInt($("main").css("margin-top")) +
                                                       parseInt($("#agendaSection").css("margin-top")) -
                                                       8);
  });

  // Smooth scroll
  $('nav a').click(function(e) {

    e.preventDefault();

    var thisTarget = $(this).attr('href'),
        targetOffset = $(thisTarget).offset().top;

    $('body').animate({
      scrollTop: targetOffset
    }, 400);
  });
});

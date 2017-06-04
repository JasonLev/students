$(function() {
  $("#notes > button").click(function() {
    slideUpThenShow('.topics', '#notes > button');
  });

  $("#hw > button").click(function() {
    slideUpThenShow('.homework', '#hw > button');
  });

  $("#exercises > button").click(function() {
    slideUpThenShow('.exc', '#exercises > button');
  });

  function slideUpThenShow(liClass, buttons) {
    $(liClass).slideUp();
    var btnClicked = event.currentTarget;
    var btnIndex = $(btnClicked).index(buttons);
    $(liClass+":eq("+btnIndex+")").show(1000);
  }
});
$(function() {
  $("#notes > button").click(function() {
    $(".topics").addClass('hide');
    var btnIndex = $(this).index('#notes > button');
    $(".topics:eq("+btnIndex+")").removeClass('hide');
  });

  $("#hw > button").click(function() {
    $(".homework").addClass('hide');
    var btnIndex = $(this).index('#hw > button');
    $(".homework:eq("+btnIndex+")").removeClass('hide');
  });

  $("#exercises > button").click(function() {
    $(".exc").addClass('hide');
    var btnIndex = $(this).index('#exercises > button');
    $(".exc:eq("+btnIndex+")").removeClass('hide');
  });
});
$(function() {
  $("#notes > button").click(function() {
    $(".topics").hide(400);
    var btnIndex = $(this).index('#notes > button');
    $(".topics:eq("+btnIndex+")").show(1000);
  });

  $("#hw > button").click(function() {
    $(".homework").hide(400);
    var btnIndex = $(this).index('#hw > button');
    $(".homework:eq("+btnIndex+")").show(1000);
  });

  $("#exercises > button").click(function() {
    $(".exc").hide(400);
    var btnIndex = $(this).index('#exercises > button');
    $(".exc:eq("+btnIndex+")").show(1000);
  });
});
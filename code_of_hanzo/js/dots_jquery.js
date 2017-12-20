$(function(){
  $('#createDot').click(function() {
    var dot = $("<div/>", {
      "class": "dot",
      click: function () {
        $(this).remove();
        checkForDots();
      }
    }).css("backgroundColor", $('input').val());
    $('body').append(dot);
    checkForDots();
  });
  function checkForDots() {
    if ($('.dot').length) {
      if ($("#changeDots").length == 0) {
        $("<button/>", {
          "id": "changeDots",
          text: 'Change the color of all the dots',
          click: function () {
            $(".dot").css("backgroundColor", $('input').val());
          }
        }).appendTo($('.dotBtns'));
      }
    } else {
      $("#changeDots").remove();
    }
  }
});

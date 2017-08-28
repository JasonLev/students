$(function(){
  var dotIntervalID,
      dotStatus = true;
  $('#createDot').click(function() {
    if (dotStatus) {
      dotIntervalID = setInterval(createDot, $('#slider').val());
      $("#createDot").text("Stop dots!");
    } else {
      clearInterval(dotIntervalID);
      $("#createDot").text("Start dots!");
    }
    dotStatus = !dotStatus;
  });

  function createDot() {
    var $dot = $("<div/>",{
      "class": "dot",
      click: function () {
        $(this).remove();
        checkForDots();
      },
      css: {
        backgroundColor: $('input').val(),
        width: $('#sizePicker').val(),
        height: $('#sizePicker').val(),
        top: Math.floor(Math.random() * (window.innerHeight - 305) + 200),
        left: Math.floor(Math.random() * (window.innerWidth - 75) + 25)
      },
      appendTo: $('body')
    });
    checkForDots();
  };

  function checkForDots() {
    if ($('.dot').length) {
      if ($("#changeDots").length == 0) {
        $("<button/>", {
          id: "changeDots",
          text: 'Change the color of all the dots',
          click: function () {
            $(".dot").css("backgroundColor", $('input').val());
          },
          appendTo: $('.dotBtns')
        });
      }
    } else {
      $("#changeDots").remove();
    }
  }

});

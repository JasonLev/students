$(function() {
  var page = 1;
  loadPlanets();
  function loadPlanets() {
    var urlPlanets = "http://swapi.co/api/planets/?page=" + page;
    $.get(urlPlanets, function (data) {
      data.results.forEach(function (planet) {
        var removeBtn = $("<button/>", {
          "class": "removeBtn",
          text: "X",
          click: function () {
            var removePlanet = ($(this).parent());
            $(removePlanet).remove();
          }
        });
        var planetDiv = $("<div/>").text(planet.name)
                                   .addClass("planet")
                                   .click(function (event) {
                                     if (event.target.nodeName === "DIV") {
                                       $("#planetFact1").text("The planet of "
                                       + planet["name"]
                                       + " is a very "
                                       + planet["climate"]
                                       + " place.");
                                       $("#planetFact2").text("It has a population of "
                                       + planet["population"]
                                       + ".");
                                     }
                                   })
                                   .append(removeBtn);
        $(".planetContainer").append(planetDiv);
      });
    }).then(
        addButton)
        //set the scroll position to showcase the addButton:
      .then(
        $(".planetContainer").animate({ scrollTop: $(".planetContainer")[0].scrollHeight + 30 }, "slow")
    );
  }
  function addButton() {
    var planetCount = $(".planet").length;
    if (planetCount < 61) {
      $(".planetContainer").append(
        $("<button type='button' class='addBtn'>Add More Planets</button>").click(function () {
          $(this).remove();
          page++;
          loadPlanets();
        })
      );
    }
  }
});

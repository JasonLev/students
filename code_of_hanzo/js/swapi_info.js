$(function() {
  var page = 1;
  loadPlanets();
  function loadPlanets() {
    var urlPlanets = "http://swapi.co/api/planets/?page=" + page;
    $.get(urlPlanets, function (data) {
      data.results.forEach(function (planet) {
        var planetDiv = $("<div/>").text(planet.name)
                                    .addClass("planet")
                                    .click(function () {
                                      $("main").text("The planet of "+ planet["name"] + " is a very " + planet["climate"] + " place.")
                                    });
        $(".planetContainer").append(planetDiv);
      });
      addButton();
    });
  }
  function addButton() {
    var planetCount = $(".planet").length;
    if (planetCount < 61) {
      $(".planetContainer").append(
        $("<button type='button'>Add More Planets</button>").click(function () {
          $(this).remove();
          page++;
          loadPlanets();
        })
      );
    }
  }
});

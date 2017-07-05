$(function() {
  var page = 1;
  var urlPlanets = "http://swapi.co/api/planets/?page=" + page;
  loadPlanetOptions();
  function loadPlanetOptions() {
    $.get(urlPlanets, function (data) {
      data.results.forEach(function (planet) {
        var planetOption = $("<option></option>").attr("value", planet.url).text(planet.name);
        $("select").append(planetOption);
      });
      // if $("option").length) < 62 {
      //   $
      // } else {
      //
      // };
    });
  }
  $("form").submit(planetInfo);
  function planetInfo(e) {
    e.preventDefault();
    var url = $("select").val();
    $.get(url, function (data) {
      $("main").text("The planet of "+ data["name"] + " is a very " + data["climate"] + " place.")
    });
  }
});

$(function() {
  $.get("http://swapi.co/api/planets/1/", function (data) {
    $("main").text("The planet of "+ data.name + " is a very " + data.climate + " place.")
  });
});

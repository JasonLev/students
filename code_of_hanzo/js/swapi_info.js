$(function() {
  $("form").submit(planetInfo);
  function planetInfo(e) {
    e.preventDefault();
    var planet = $("select").val();
    var url = "http://swapi.co/api/planets/"+ planet + "/"
    $.get(url, function (data) {
      console.log(data);
      $("main").text("The planet of "+ data["name"] + " is a very " + data["climate"] + " place.")
    });
  }
});

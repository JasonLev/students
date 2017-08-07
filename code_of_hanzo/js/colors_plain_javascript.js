var body = document.querySelector("body");
var picker = document.querySelector("input");
picker.addEventListener("change", function() {
  // alert("the input changed!");
  var colorSelected = document.querySelector("input").value
  // console.log(colorSelected);
  body.style.backgroundColor = colorSelected;
});

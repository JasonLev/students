var body = document.querySelector("body");
var picker = document.querySelector("input");
var dotBtn = document.querySelector("#createDot");

// "colors" exercise to change body backgroundColor when new color is picked:
// picker.addEventListener("change", function() {
//   // alert("the input changed!");
//   var colorSelected = document.querySelector("input").value
//   // console.log(colorSelected);
//   body.style.backgroundColor = colorSelected;
// });

dotBtn.addEventListener("click", function () {
  var newDot = document.createElement('div');
  newDot.classList.add('dot');
  newDot.style.backgroundColor = picker.value;
  body.appendChild(newDot);
  newDot.addEventListener("click", function () {
    this.remove();
    checkForDots();
  })
  checkForDots();
})
function checkForDots() {
  if (document.querySelector('.dot')) {
    if (!document.querySelector('#changeDots')) {
      var changeBtn = document.createElement('button');
      changeBtn.id = "changeDots";
      changeBtn.textContent = 'Change the color of all the dots';
      document.querySelector('.dotBtns').appendChild(changeBtn);
      changeBtn.addEventListener("click", function () {
        var allDots = document.querySelectorAll(".dot");
        allDots.forEach(function (dot) {
          dot.style.backgroundColor = picker.value;
        })
      })
    }
  } else {
    document.querySelector('#changeDots').remove();
  }
}

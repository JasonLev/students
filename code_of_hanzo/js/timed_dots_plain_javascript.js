var body = document.querySelector("body");
var picker = document.querySelector("#colorPicker");
var dotBtn = document.querySelector("#createDot");
var speed = document.querySelector('#slider');
var size = document.querySelector('#sizePicker');
var dotStatus = true;
var dotIntervalID;

dotBtn.addEventListener("click", function () {
  if (dotStatus){
    dotBtn.textContent = "Stop the dots!";
    dotIntervalID = setInterval(createDot, speed.value);
  } else {
    dotBtn.textContent = "Start the dots!";
    clearInterval(dotIntervalID);
  }
  dotStatus = !dotStatus;
});

function createDot() {
  var newDot = document.createElement('div');
  //randomly set the "top" property
  var top = Math.floor(Math.random() * (window.innerHeight - 305) + 200);
  var left = Math.floor(Math.random() * (window.innerWidth - 75) + 25);
  newDot.classList.add('dot');
  newDot.style.backgroundColor = picker.value;
  newDot.style.top = top + "px";
  newDot.style.left = left + "px";
  newDot.style.width = size.value + "px";
  newDot.style.height = size.value + "px";
  body.appendChild(newDot);
  newDot.addEventListener("click", function () {
    this.remove();
    checkForDots();
  })
  checkForDots();
}
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

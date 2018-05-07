let cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  }, false);
});

let resetBtn = document.querySelector('button');
let timer = document.querySelector('#timer');
let intervalID;

resetBtn.addEventListener("click", () => {
  resetBtn.textContent = "Restart Game";
  timer.textContent = 0;
  clearInterval(intervalID);
  intervalID = setInterval( () => {
    timer.textContent++;
  }, 1000);
  cards.forEach(card => {
    card.classList.remove('flipped');
  });
});

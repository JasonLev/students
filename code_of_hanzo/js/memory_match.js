let collection = ["A",
                  "A",
                  "B",
                  "B",
                  "C",
                  "C",
                  "D",
                  "D",
                  "E",
                  "E",
                  "F",
                  "F",
                  "G",
                  "G",
                  "H",
                  "H"];
let cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  }, false);
});

let resetBtn = document.querySelector('button');
let timer = document.querySelector('#timer');
let intervalID;

resetBtn.addEventListener("click", startGame);

function startGame() {
  resetBtn.textContent = "Restart Game";
  clearInterval(intervalID);
  timer.textContent = 0;
  intervalID = setInterval( () => {
    timer.textContent++;
  }, 1000);
  setupCards();
};

function setupCards() {
  //shuffle collection
  for (let i = collection.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [collection[i], collection[j]] = [collection[j], collection[i]];
  }
  // flip all cards front-side up
  cards.forEach(card => {
    card.classList.remove('flipped');
  });
  //assign each card a value (after a delay to possibly let card flip to front)
  let delayID;
  delayID = setTimeout(() => {
    cards.forEach( (card, index) => {
      card.querySelector(".back span").textContent = collection[index];
    });
  }, 900);
}

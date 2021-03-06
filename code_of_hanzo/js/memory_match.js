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
let matchVal = null;
let cards = document.querySelectorAll(".card");
let resetBtn = document.querySelector('button');
let timer = document.querySelector('#timer');
let gameStatus = document.querySelector('#game-status');
let intervalID;
let bestScore;

cards.forEach(card => {
  card.addEventListener("click", () => {
    checkMatch(card)
  }, false);
});

resetBtn.addEventListener("click", startGame);

function startGame() {
  resetBtn.textContent = "Restart Game";
  clearInterval(intervalID);
  matchVal = null;
  timer.textContent = 0;
  gameStatus.textContent = "";
  setupCards();
  intervalID = setInterval( () => {
    timer.textContent++;
  }, 1000);
};

function setupCards() {
  //shuffle collection
  for (let i = collection.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [collection[i], collection[j]] = [collection[j], collection[i]];
  }
  // flip all cards front-side up
  cards.forEach(card => {
    card.classList.remove('flipped', 'open');
  });
  //assign each card a value (after a delay to possibly let card flip to front)
  setTimeout(() => {
    cards.forEach( (card, index) => {
      card.querySelector(".back span").textContent = collection[index];
    });
  }, 900);
}

function checkMatch(card) {
  let content = card.querySelector(".back span").textContent;
  if (card.classList.contains("flipped") || content === "?????") {
    return
  } else if (matchVal === null) {
    card.classList.add("flipped", "open");
    matchVal = content;
  } else if (matchVal === content) {
    card.classList.add("flipped");
    document.querySelector(".open").classList.remove("open");
    matchVal = null;
    checkGameOver();
  } else {
    let openCard = document.querySelector(".open");
    card.classList.add("flipped");
    openCard.classList.remove("open");
    matchVal = null;
    setTimeout(() => {
      card.classList.remove("flipped");
      openCard.classList.remove("flipped");
    }, 1200);
  }
}
function checkGameOver() {
  if (document.querySelectorAll('.flipped').length === collection.length) {
    clearInterval(intervalID);
    gameStatus.textContent = "Game Over.  Great job!"
  }
}

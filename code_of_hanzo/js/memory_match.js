let collection = ["../img/playing_cards/1_diamond.png",
                  "../img/playing_cards/1_diamond.png",
                  "../img/playing_cards/2_spade.png",
                  "../img/playing_cards/2_spade.png",
                  "../img/playing_cards/4_heart.png",
                  "../img/playing_cards/4_heart.png",
                  "../img/playing_cards/7_spade.png",
                  "../img/playing_cards/7_spade.png",
                  "../img/playing_cards/9_club.png",
                  "../img/playing_cards/9_club.png",
                  "../img/playing_cards/jack_diamond.png",
                  "../img/playing_cards/jack_diamond.png",
                  "../img/playing_cards/king_club.png",
                  "../img/playing_cards/king_club.png",
                  "../img/playing_cards/queen_diamond.png",
                  "../img/playing_cards/queen_diamond.png"];
let matchVal = null;
let cards = document.querySelectorAll(".card");
let resetBtn = document.querySelector('button');
let timer = document.querySelector('#timer');
let gameStatus = document.querySelector('#game-status');
let intervalID;
let bestScoreVal;
let victoryImg;

cards.forEach(card => {
  card.addEventListener("click", () => {
    checkMatch(card)
  }, false);
});

resetBtn.addEventListener("click", startGame);

function startGame() {
  resetBtn.textContent = "Restart Game";
  clearInterval(intervalID);
  if (document.querySelector('section img')) {
    victoryImg.remove();
  };
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
      card.querySelector(".back img").src = collection[index];
    });
  }, 900);
}

function checkMatch(card) {
  let imgPath = card.querySelector(".back img").src;
  if (card.classList.contains("flipped")) {
    return
  } else if (matchVal === null) {
    card.classList.add("flipped", "open");
    matchVal = imgPath;
  } else if (matchVal === imgPath) {
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
    checkFastTime();
    gameStatus.textContent = "Game Over.  Great job!";
    victoryImg = document.createElement("img");
    victoryImg.src = "../img/victory-stewie.jpeg";
    document.querySelector('section').appendChild(victoryImg);
  }
}
function checkFastTime() {
  if (!bestScoreVal) {
    bestScoreVal = timer.textContent
  } else if (parseInt(timer.textContent) < parseInt(bestScoreVal)) {
    bestScoreVal = timer.textContent;
  }
  document.querySelector('#fastestTime').textContent = "Fastest Time: " + bestScoreVal;
}

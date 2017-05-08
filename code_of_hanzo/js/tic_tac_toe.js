var p1Name = prompt("What is Player 1's name?");
var p2Name = prompt("What is Player 2's name?");
document.querySelector("#player1").textContent = p1Name;
document.querySelector("#player2").textContent = p2Name;

var turn = "X";
var scoreText = document.querySelector("#scoreBoard").textContent;

changeText("Begin the game, ");

document.querySelector('table').addEventListener("click", assignCell);
document.querySelector('button').addEventListener("click", reset);
function changeText(text) {
  scoreText = text;
  if (text === "You win, " && turn === "X") {
    scoreText += p2Name + "! Click \"Clear\" to play again.";
  } else if (text === "You win, " && turn === "O") {
    scoreText += p1Name + "! Click \"Clear\" to play again.";
  } else if (text === "Stalemate!") {
    scoreText += " Play again. Hit the reset button.";
  } else if ((text === "Your turn, " || text === "Begin the game, ") && turn === "X") {
    scoreText += p1Name;
  } else {
    scoreText += p2Name;
  }

  document.querySelector("#scoreBoard").textContent = scoreText;
}

function playX(el) {
  el.textContent = turn;
  el.classList.add("player2");
  turn = "O";
  gameStatus();
}

function playO(el) {
  el.textContent = turn;
  el.classList.add("player1");
  turn = "X";
  gameStatus();
}

function assignCell(element) {
  var cell = element.target;
  if (cell.tagName === "TD" && cell.textContent === "") {
    if (turn === "X") {
      playX(cell);
    } else {
      playO(cell);
    }
  }
}

function gameStatus() {
  var board = document.querySelectorAll("td");
  if (
    //win via top row
      (board[0].textContent != "" &&
       board[0].textContent === board[1].textContent &&
       board[1].textContent === board[2].textContent) ||
    // win via middle row
      (board[3].textContent != "" &&
       board[3].textContent === board[4].textContent &&
       board[4].textContent === board[5].textContent) ||
    // win via bottom row
      (board[6].textContent != "" &&
       board[6].textContent === board[7].textContent &&
       board[7].textContent === board[8].textContent) ||
    // win via left column
      (board[0].textContent != "" &&
       board[0].textContent === board[3].textContent &&
       board[3].textContent === board[6].textContent) ||
    // win via middle column
      (board[1].textContent != "" &&
       board[1].textContent === board[4].textContent &&
       board[4].textContent === board[7].textContent) ||
    // win via right column
      (board[2].textContent != "" &&
       board[2].textContent === board[5].textContent &&
       board[5].textContent === board[8].textContent) ||
    // win via left diagonal
      (board[0].textContent != "" &&
       board[0].textContent === board[4].textContent &&
       board[4].textContent === board[8].textContent) ||
    // win via right diagonal
      (board[2].textContent != "" &&
       board[2].textContent === board[4].textContent &&
       board[4].textContent === board[6].textContent)
    ) {
    document.querySelector('table').removeEventListener("click", assignCell);
    changeText("You win, ");
  } else if (board[0].textContent != "" &&
             board[1].textContent != "" &&
             board[2].textContent != "" &&
             board[3].textContent != "" &&
             board[4].textContent != "" &&
             board[5].textContent != "" &&
             board[6].textContent != "" &&
             board[7].textContent != "" &&
             board[8].textContent != ""
    ) {
    changeText("Stalemate!");
  } else {
    changeText("Your turn, ");
  }
}

function reset() {
  document.querySelectorAll("td").forEach(function(cell){
    cell.textContent = "";
    cell.classList.remove("player1");
    cell.classList.remove("player2");
  })
  turn = "X";
  changeText("Begin the game, ");
  document.querySelector('table').addEventListener("click", assignCell);
}


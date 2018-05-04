let cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    console.log("card click");
    card.classList.toggle("flipped");
  }, false);
});

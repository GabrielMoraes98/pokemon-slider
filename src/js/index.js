const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");
const cards = document.querySelectorAll(".card");
let indexCard = 0;
arrowRight.addEventListener("click", () => {
  if (indexCard == cards.length - 1) {
    return;
  }
  removeActiveCard();
  indexCard++;
  addActiveCard();
});
arrowLeft.addEventListener("click", () => {
  if (indexCard == 0) {
    return;
  }
  removeActiveCard();
  indexCard--;
  addActiveCard();
});
function addActiveCard() {
    cards[indexCard].classList.add("active");
}
function removeActiveCard() {
    document.querySelector(".active").classList.remove("active");
}

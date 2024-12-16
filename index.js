let player = {
  name: "Alan",
  chips: 145,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomeCard() {
  let randomeNumber = Math.floor(Math.random() * 13) + 1;
  if (randomeNumber > 10) {
    return 10;
  } else if (randomeNumber === 1) {
    return 11;
  } else {
    return randomeNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomeCard();
  let secondCard = getRandomeCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "do you want to draw a new card?😊";
  } else if (sum === 21) {
    message = "wohooO!you got BlackJack😃";
    hasBlackJack = true;
  } else {
    message = "you are out of the game😭";
    isAlive = false;
  }
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum:" + sum;
  console.log(message);
  console.log(hasBlackJack);
  console.log(isAlive);
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomeCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

const gameBoard = document.getElementById("gameBoard");
const movesText = document.getElementById("movesText");
const matchesText = document.getElementById("matchesText");
const messageText = document.getElementById("messageText");
const resetBtn = document.getElementById("resetBtn");

const cardValues = ["🍎", "🍌", "🍇", "🍒", "🍎", "🍌", "🍇", "🍒"];

let cards = [];
let firstCard = null;
let secondCard = null;
let moves = 0;
let matches = 0;
let lockBoard = false;

let bestScore = localStorage.getItem("memoryBestScore");

function shuffleCards() {
  cards = [...cardValues];

  cards.sort(function () {
    return Math.random() - 0.5;
  });
}

function startGame() {
  gameBoard.innerHTML = "";

  firstCard = null;
  secondCard = null;
  moves = 0;
  matches = 0;
  lockBoard = false;

  movesText.textContent = moves;
  matchesText.textContent = `${matches} / 4`;

  if (bestScore) {
    messageText.textContent = `Best score: ${bestScore} moves`;
  } else {
    messageText.textContent = "Find all the matching pairs.";
  }

  shuffleCards();

  for (let i = 0; i < cards.length; i++) {
    const cardBtn = document.createElement("button");

    cardBtn.classList.add("card");
    cardBtn.textContent = "?";
    cardBtn.dataset.value = cards[i];
    cardBtn.dataset.index = i;

    cardBtn.addEventListener("click", function () {
      handleCardClick(cardBtn);
    });

    gameBoard.append(cardBtn);
  }
}

function handleCardClick(cardBtn) {
  if (lockBoard) {
    return;
  }

  if (cardBtn.classList.contains("matched")) {
    return;
  }

  if (cardBtn === firstCard) {
    return;
  }

  revealCard(cardBtn);

  if (firstCard === null) {
    firstCard = cardBtn;
    return;
  }

  secondCard = cardBtn;
  moves++;
  movesText.textContent = moves;

  checkForMatch();
}

function revealCard(cardBtn) {
  cardBtn.textContent = cardBtn.dataset.value;
  cardBtn.classList.add("revealed");
}

function hideCard(cardBtn) {
  cardBtn.textContent = "?";
  cardBtn.classList.remove("revealed");
}

function checkForMatch() {
  const firstValue = firstCard.dataset.value;
  const secondValue = secondCard.dataset.value;

  if (firstValue === secondValue) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    firstCard.disabled = true;
    secondCard.disabled = true;

    matches++;
    matchesText.textContent = `${matches} / 4`;

    resetSelectedCards();
    checkWin();

    return;
  }

  lockBoard = true;
  messageText.textContent = "Not a match...";

  setTimeout(function () {
    hideCard(firstCard);
    hideCard(secondCard);

    resetSelectedCards();

    lockBoard = false;
    messageText.textContent = "";
  }, 800);
}

function resetSelectedCards() {
  firstCard = null;
  secondCard = null;
}

function checkWin() {
  if (matches === cardValues.length / 2) {
    messageText.textContent = `You won in ${moves} moves.`;

    if (!bestScore || moves < Number(bestScore)) {
      bestScore = moves;
      localStorage.setItem("memoryBestScore", bestScore);
      messageText.textContent = `New best score: ${moves} moves.`;
    }
  }
}

resetBtn.addEventListener("click", startGame);

startGame();
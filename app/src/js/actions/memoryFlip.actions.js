const state = {
  moves: 0,
  time: 0,
  firstCard: null,
  secondCard: null,
  lockBoard: false,
  matches: 0,
};
const icons = ["🍎", "🍌", "🍇", "🍓", "🍉", "🍍"];

function createCards() {
  return [...icons, ...icons];
}
export function mountMf() {
  const board = document.getElementById("board");

  const moves = document.getElementById("moves");

  const time = document.getElementById("time");

  document.getElementById("start-game").addEventListener("click", resetGame);

  initBoard(board);

  board.addEventListener("click", handleCardClick);

  startTimer(time);

  updateMoves(moves);
}
function shuffle(arr) {
  const cards = [...arr];

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}
function handleCardClick(e) {
  const card = e.target.closest(".memory__card");

  if (!card) return;

  if (state.lockBoard) return;

  if (card === state.firstCard) return;

  if (card.classList.contains("memory__card--matched")) return;

  flipCard(card);

  if (!state.firstCard) {
    state.firstCard = card;
    return;
  }

  state.secondCard = card;

  state.moves++;

  updateMoves(document.getElementById("moves"));

  checkMatch();
}

function initBoard(board) {
  const cards = shuffle([...icons, ...icons]);

  board.innerHTML = cards
    .map(
      (icon, index) => `
      
<div
class="memory__card"
data-index="${index}"
data-icon="${icon}"
>

<div class="memory__card-inner">

<div class="memory__card-front">
?
</div>

<div class="memory__card-back">
${icon}
</div>

</div>

</div>

`,
    )
    .join("");
}

function flipCard(card) {
  card.classList.add("memory__card--flipped");
}

function checkMatch() {
  const same = state.firstCard.dataset.icon === state.secondCard.dataset.icon;

  same ? matchCards() : unFlipCards();
}

function matchCards() {
  state.firstCard.classList.add("memory__card--matched");

  state.secondCard.classList.add("memory__card--matched");

  state.matches++;

  resetTurn();

  if (state.matches === icons.length) {
    finishGame();
  }
}

function unFlipCards() {
  state.lockBoard = true;

  state.firstCard.classList.add("memory__card--shake");

  state.secondCard.classList.add("memory__card--shake");

  setTimeout(() => {
    state.firstCard.classList.remove(
      "memory__card--shake",
      "memory__card--flipped",
    );

    state.secondCard.classList.remove(
      "memory__card--shake",
      "memory__card--flipped",
    );

    resetTurn();
  }, 800);
}

function resetTurn() {
  state.firstCard = null;

  state.secondCard = null;

  state.lockBoard = false;
}

function startTimer(el) {
  clearInterval(state.timer);

  state.time = 0;

  el.textContent = 0;

  state.timer = setInterval(() => {
    state.time++;

    el.textContent = state.time;
  }, 1000);
}

function updateMoves(el) {
  el.textContent = state.moves;
}

function finishGame() {
  clearInterval(state.timer);

  setTimeout(() => {
    alert(
      `🎉 You Win!

Moves : ${state.moves}

Time : ${state.time}s`,
    );
  }, 500);
}

function resetGame() {
  clearInterval(state.timer);

  state.moves = 0;
  state.time = 0;

  state.matches = 0;

  state.firstCard = null;
  state.secondCard = null;

  state.lockBoard = false;

  mountMf();
}
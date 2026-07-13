const CHOICES = [
  { id: "rock", icon: "✊" },
  { id: "paper", icon: "✋" },
  { id: "scissors", icon: "✌️" },
];
const state = {
  userChoice: null,
  aiChoice: null,
  lives: 3,
  score: 0,
  bestScore: Number(localStorage.getItem("rps-best")) || 0,
};

function getRandomChoice() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

const WIN_RULES = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

function getWinner(user, ai) {
  if (user === ai) return "draw";

  if (WIN_RULES[user] === ai) {
    return "user";
  }

  return "ai";
}
function render() {
  document.querySelector(".rps__choice-value").textContent =
    state.userChoice?.icon ?? "—";

  document.getElementById("computerChoice").textContent =
    state.aiChoice?.icon ?? "—";

  document.querySelector(".rps__score-value").textContent = state.score;

  document.querySelector(".rps__score--best-value").textContent =
    state.bestScore;

  
}

function renderLives(type = "") {
  const livesEl = document.querySelector(".rps__lives-state");
  livesEl.innerHTML = "";

  if (state.lives === 0) {
    livesEl.textContent = "💔";
    return;
  }

  if (state.lives <= 3) {
    for (let i = 0; i < state.lives; i++) {
      const heart = document.createElement("span");
      heart.textContent = "❤";
      heart.classList.add("rps__heart");

      if (type === "gain") heart.classList.add("rps__heart--gain");
      if (type === "lose") heart.classList.add("rps__heart--lose");

      livesEl.appendChild(heart);
    }
  } else {
    livesEl.textContent = state.lives;
  }
}



function showGameOver() {
  const modal = document.getElementById("gameOverModal");
  modal.classList.add("show");
}

function hideGameOver() {
  const modal = document.getElementById("gameOverModal");
  modal.classList.remove("show");
}


function playRound(choiceId) {
  if (state.lives <= 0) return;

  state.userChoice = CHOICES.find((c) => c.id === choiceId);
  state.aiChoice = getRandomChoice();

  const result = getWinner(state.userChoice.id, state.aiChoice.id);

  if (result === "user") {
    state.score++;
    state.lives++;
    renderLives("gain")
  }

  if (result === "ai") {
    state.lives--;
    renderLives("lose")
  }

  if (state.lives === 0) {
    render();
    showGameOver();
    return;
  }

  if (state.score > state.bestScore) {
    state.bestScore = state.score;
    localStorage.setItem("rps-best", state.bestScore);
  }

  render();
}

function resetGame() {
  state.userChoice = null;
  state.aiChoice = null;
  state.score = 0;
  state.lives = 3;
  hideGameOver()
  render();
}

export function mountRsp() {
  const buttons = document.querySelectorAll(".rps__btn");
  const resetBtn = document.querySelector("#start-game");
  const resetBtnModal = document.querySelector("#start-game-modal");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.choice;
      playRound(choice);
    });
  });

  resetBtn.addEventListener("click", resetGame);
  resetBtnModal.addEventListener("click", resetGame);

  render();
}
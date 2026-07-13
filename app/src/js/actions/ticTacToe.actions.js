import { fireWinEffect, fireDrawEffect } from "../animations/gameAnimaitions";

const status = document.querySelector(".game__status");
const statusCard = document.querySelector(".game__status-card");

const WIN_STATES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const ICONS = {
  X: `
    <svg viewBox="0 0 128 128">
      <path d="M16 16 L112 112"/>
      <path d="M112 16 L16 112"/>
    </svg>
  `,
  O: `
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="35"/>
    </svg>
  `,
};

const STATUS = {
  win: {
    text: "You Win 😎🔥",
    className: "status-win",
    effect: fireWinEffect,
  },

  lose: {
    text: "You Lose 😵‍💫",
    className: "status-lose",
  },

  draw: {
    text: "Draw 🤝",
    className: "status-draw",
    effect: fireDrawEffect,
  },
};

const state = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  gameOver: false,
  result: null,

  score: {
    win: 0,
    lose: 0,
    draw: 0,
  },
};

let cells;

export function mountTicTacToe() {
  cells = document.querySelectorAll(".ttt-cell");
  const reStartBtn = document.getElementById("start-game");

  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
   reStartBtn?.addEventListener("click", resetGame);
}

function handleCellClick(e) {
  if (state.gameOver) return;

  const index = Number(e.currentTarget.dataset.index);

  if (state.board[index]) return;

  if (playMove(index, "X")) return;

  state.currentPlayer = "O";

  setTimeout(aiMove, 250);
}

function playMove(index, player) {
  state.board[index] = player;

  renderCell(cells[index], player);

  const winner = checkWinner(state.board);

  if (winner) {
    finishGame(player === "X" ? "win" : "lose");
    return true;
  }

  if (!state.board.includes(null)) {
    finishGame("draw");
    return true;
  }

  return false;
}

function renderCell(cell, player) {
  cell.innerHTML = ICONS[player];

  cell.classList.remove("is-empty");

  cell.classList.add(`is-${player.toLowerCase()}`);
}

function finishGame(type) {
  state.gameOver = true;
  state.result = type;

  updateUI();
}

function updateUI() {
  const ui = STATUS[state.result];

  status.style.display = "flex";
  status.style.opacity = 1;

  status.classList.add(ui.className);

  statusCard.textContent = ui.text;

  state.score[state.result]++;

  document.querySelector(`.final__result-${state.result}`).textContent =
    state.score[state.result];

  ui.effect?.();
}

function resetGame() {
  state.board = Array(9).fill(null);

  state.currentPlayer = "X";

  state.gameOver = false;

  state.result = null;

  status.style.display = "none";
  status.style.opacity = 0;

  status.classList.remove("status-win", "status-draw", "status-lose");

  cells.forEach((cell) => {
    cell.innerHTML = "";

    cell.className = "ttt-cell is-empty";
  });
}

function checkWinner(board) {
  for (const [a, b, c] of WIN_STATES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function aiMove() {
  const move = getBestMove(state.board);

  if (move == null) return;

  if (playMove(move, "O")) return;

  state.currentPlayer = "X";
}

function findWinningMove(board, player) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== null) continue;

    const temp = [...board];

    temp[i] = player;

    if (checkWinner(temp) === player) {
      return i;
    }
  }

  return null;
}

function getBestMove(board) {
  const ai = "O";
  const human = "X";

  let move = findWinningMove(board, ai);

  if (move !== null) return move;

  move = findWinningMove(board, human);

  if (move !== null) return move;

  if (board[4] === null) return 4;

  const corners = [0, 2, 6, 8].filter((i) => board[i] === null);

  if (corners.length) {
    return corners[Math.floor(Math.random() * corners.length)];
  }

  const free = board
    .map((cell, i) => (cell === null ? i : null))
    .filter((i) => i !== null);

  return free[Math.floor(Math.random() * free.length)];
}

import GuessMyNumber from "../components/GuessMyNumber";
import MemoryFlip from "../components/MemoryFlip";
import RockPaperScissors from "../components/RockPaperScissors";
import TicTacToeView from "../components/TicTacToe";
import { mountGN } from "../src/js/actions/guessNumber.actions";
import { mountMf } from "../src/js/actions/memoryFlip.actions";
import {mountRsp} from "../src/js/actions/rockPaperScissors.actions";
import { mountTicTacToe } from "../src/js/actions/ticTacToe.actions";

export default function renderGameView(gameId) {
  setTimeout(mountGameActions, 0)
  return `
    <section class="game-view">
    <div class="btn-back"> 
      <button class="Btn" onclick="history.back()"> &larr; Back</button>
       </div>
      ${getGame(gameId)}
    </section>
  `;
}

function getGame(gameId) {
  switch (gameId) {
    case "tic-tac-toe":
      return TicTacToeView();
    case "rock-paper-scissors":
      return RockPaperScissors();
    case "number-guess":
      return GuessMyNumber();
    case "memory-flip":
      return MemoryFlip();
    default:
      return `<p>Game not found</p>`;
  }
}

function mountGameActions() {
  const game = location.pathname.split("/").pop();
  if (game === "tic-tac-toe") {
    mountTicTacToe();
  }
  if (game === "rock-paper-scissors") {
    mountRsp();
  }
  if (game === "memory-flip") {
    mountMf();
  }
  if (game === "number-guess") {
    mountGN();
  }
}
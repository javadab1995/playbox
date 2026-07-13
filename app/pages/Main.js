import GameCard from "../components/GameCard";
import { games } from "../data/games";

export default function renderMain() {
  return `
    <h2 class="title">Top to choice your favorite game</h2>
    <div class="games">
    
      ${games.map(GameCard).join("")}
    </div>
  `;
}

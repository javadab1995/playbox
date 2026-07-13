import renderMain from "./pages/Main";
import renderGameView from "./pages/GameView";
import { mountTicTacToe } from "./src/js/actions/ticTacToe.actions.js";

export function render() {
  const view = document.getElementById("view");

  if (!view) {
    console.warn("⚠️ view not mounted yet");
    return;
  }

  const path = location.pathname;

  if (path === "/playbox/") {
    view.innerHTML = renderMain();
    return;
  }

  if (path.startsWith("/game/")) {
    const gameId = path.split("/")[2];
    view.innerHTML = renderGameView(gameId);
    mountTicTacToe();
    return;
  }

  view.innerHTML = "<p>Page not found</p>";
}

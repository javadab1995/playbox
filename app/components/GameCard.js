import { render } from "../router";

window.goToGame = function (id) {
  history.pushState({}, "", `/game/${id}`);
  render();
};

function GameCard(game) {
  return `
    <div class="card">
      <img
        class="card__image"
        src="${game.image}"
        alt="${game.title}"
      />

      <div class="card__overlay">
        <h3 class="card__title">${game.title}</h3>
        <p class="card__desc">${game.description}</p>

        <button
          class="card__btn Btn"
          onclick="goToGame('${game.id}')"
        >
          Play
        </button>
      </div>
    </div>
  `;
}

export default GameCard;

import { games } from "../data/games";
import { render } from "../router";

const searchInput = document.querySelector(".search input");
const suggestions = document.querySelector("#suggestions")

let stateValue = "";
searchInput.addEventListener("input", (e) => {
    stateValue = e.target.value.toLowerCase();
    if (stateValue.length < 3) return null;
    const results = games.filter(g => g.title.toLowerCase().includes(stateValue));
    if (!results.length) {
        suggestions.style.visibility = "hidden"
    }
    renderSuggestions(results)

    
})

function renderSuggestions(results) {
    suggestions.innerHTML = "";
    results.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.title;
        li.dataset.id = item.id
        suggestions.appendChild(li)
    });
    suggestions.style.visibility= "visible";
}

suggestions.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        searchInput.value = e.target.textContent;
        suggestions.style.visibility = "visible";
        const id = e.target.dataset.id;
        goToGame(id) 
        searchInput.value = ""
        stateValue = ""
    }
    suggestions.style.visibility = "hidden";
})


window.goToGame = function (id) {
  history.pushState({}, "", `/game/${id}`);
  render();
};
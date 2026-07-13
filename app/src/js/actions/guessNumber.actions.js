const initialState = {
  secretNumber: Math.trunc(Math.random() * 20) + 1,
  score: 20,
  highscore: 0,
};

const displayMessage = function (message) {
  document.querySelector("#message").textContent = message;
};

export function mountGN() {
  const checkBtn = document.querySelector("#checkBtn");
    const secretNumber = document.getElementById("secretNumber");
    const reStartBtn = document.getElementById("start-game");
    
    checkBtn.addEventListener("click", () => {
        const guess = Number(document.querySelector("#guessInput").value);
        console.log(guess)
        console.log(initialState.secretNumber)
        if (!guess) {
          displayMessage("Please inter a Number ");
        } else if (guess === initialState.secretNumber) {
          displayMessage("🎉 Correct Number!");
          secretNumber.textContent = initialState.secretNumber;
          document.querySelector(".guess").style.backgroundColor = "#60b347";

          if (initialState.score > initialState.highscore) {
            initialState.highscore = initialState.score;
            document.querySelector("#highscore").textContent =
              initialState.highscore;
          }
        } else if (guess !== initialState.secretNumber) {
          if (initialState.score > 1) {
            displayMessage(
              guess > initialState.secretNumber ? "📈 Too high!" : "📉 Too low!",
            );
            initialState.score--;
            document.querySelector("#score").textContent = initialState.score;
          } else {
            
            displayMessage("💥 You lost the game!");
            document.querySelector("#score").textContent = 0;
          }
        }
    });
    
    reStartBtn?.addEventListener("click", resetGame);
}

function resetGame() {
     initialState.score = 20;
     initialState.secretNumber = Math.trunc(Math.random() * 20) + 1;

     displayMessage("Start guessing...");
     document.querySelector("#score").textContent = initialState.score;
    document.getElementById("secretNumber").textContent = "?";
     document.querySelector("#guessInput").value = "";
    document.querySelector(".guess").style.backgroundColor = "#17144A";  
}
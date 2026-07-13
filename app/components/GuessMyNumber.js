export default function GuessMyNumber() {
  return ` 
    <div class="guess">
      <header class="guess__header">
        <h2 class="guess__title">Guess My Number</h2>
      </header>

      <div class="guess__number" id="secretNumber">
        ?
      </div>

      <p class="guess__message" id="message">
        Start guessing...
      </p>

      <div class="guess__controls">
        <input
          type="number"
          class="guess__input"
          id="guessInput"
          placeholder="Enter number"
        />

        <button class="guess__btn" id="checkBtn">
          Check
        </button>
      </div>

      <div class="guess__stats">
        <span>
          Score: <b id="score">20</b>
        </span>
        <span>
          Highscore: <b id="highscore">0</b>
        </span>
      </div>

     
    </div>
       
 <div class="start-btn">
        <button class="Btn" id="start-game">Reset</button>
</div>
    `;
  
}

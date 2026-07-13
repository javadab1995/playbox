export default function RockPaperScissors() {
  return `
 
     <section class="rps">


  <header class="rps__header">

    <div class="rps__lives">
      <span class="rps__lives-label">Lives </span>
      <div class="rps__lives-state" id="hearts">❤❤❤</div>
    </div>

    <div class="rps__score">
      <span class="rps__score-label">Score : <span class="rps__score-value" >0</span></span>
      
      <span class="rps__best-value" id="bestScore">BestScore : <span class="rps__score--best-value" >0</span></span>
    </div>

  </header>

  
  <div class="rps__board">

    <div class="rps__choice rps__choice--player">
      <span class="rps__choice-label">You</span>
      <div class="rps__choice-value" id="playerChoice">—</div>
    </div>

    <div class="rps__vs">VS</div>

    <div class="rps__choice rps__choice--computer">
      <span class="rps__choice-label">AI</span>
      <div class="rps__choice-value" id="computerChoice">—</div>
    </div>

  </div>

  <!-- Result -->
  <div class="rps__result" id="result"></div>

  <!-- Controls -->
  <div class="rps__controls">
    <button class="rps__btn" data-choice="rock">✊ Rock</button>
    <button class="rps__btn" data-choice="paper">✋ Paper</button>
    <button class="rps__btn" data-choice="scissors">✌️ Scissors</button>
  </div>

</section>
   
    
 <div class="start-btn">
        <button class="Btn" id="start-game">Reset</button>
  </div>

      <div class="rps-modal " id="gameOverModal">
  <div class="rps-modal__content">
    <h2 class="rps-modal__title">💀 Game Over</h2>
    <p class="rps-modal__text">قلب‌هات تموم شد </p>
    <div class="start-btn">
        <button class="Btn" id="start-game-modal">Reset</button>
  </div>
  </div>
</div>
      `;
}

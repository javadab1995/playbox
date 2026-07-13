export default function TicTacToeView() {
  return `
 
     <div id="tic-tac-toe" class="ttt-board">
       <header class="final__result">
       <div class="final__result-staus">
          <span >You Win ✌</span>
          <span class="final__result-win">0</span>
          </div>
          <div class="final__result-staus">
          <span>Draw 🤝🏻</span>
          <span class="final__result-draw">0</span>
          </div>
          <div class="final__result-staus">
          <span>You Lose ☹</span>
          <span class="final__result-lose" >0</span>
          </div>
       </header>
      <div class="ttt-grid">
        ${Array(9)
          .fill(null)
          .map(
            (_, i) => `
              <button 
                class="ttt-cell is-empty" 
                data-index="${i}"
              ></button>
            `,
          )
          .join("")}
      </div>
          
     
    </div>
    
 <div class="start-btn">
        <button class="Btn" id="start-game">Reset</button>
      </div>
      `;
}



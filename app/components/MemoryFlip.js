export default function MemoryFlip() {
    return ` 
      <div class="memory">
        <header class="memory__header">
          <h2 class="memory__title">Memory Flip</h2>

          <div class="memory__stats">
            <span class="memory__moves">
              Moves: <b id="moves">0</b>
            </span>
            <span class="memory__time">
              Time: <b id="time">0</b>s
            </span>
          </div>
        </header>

        <div class="memory__board" id="board">
          <div class="memory__card">
            <div class="memory__card-inner">
              <div class="memory__card-front"></div>

              <div class="memory__card-back">🍎</div>
            </div>
          </div>
        </div>
      </div>

      <div class="start-btn">
        <button class="Btn" id="start-game">Reset</button>
      </div>
      `;
}



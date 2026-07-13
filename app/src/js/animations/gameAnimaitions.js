const WIN_DURATION = 5000; 

export function fireWinEffect() {
  const root = document.getElementById("fx-root");
  if (!root) return;

  for (let i = 0; i < 90; i++) {
    const p = document.createElement("div");
    p.className = "fx-confetti";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDelay = Math.random() * 2000 + "ms";
    p.style.setProperty("--hue", Math.random() * 360);

    root.appendChild(p);
    setTimeout(() => p.remove(), WIN_DURATION + 100);
  }
}

const DRAW_DURATION = 1000;

export function fireDrawEffect() {
  const root = document.getElementById("fx-root");
  if (!root) return;

  const layer = document.createElement("div");
  layer.className = "fx-draw";
  root.appendChild(layer);

  setTimeout(() => layer.remove(), DRAW_DURATION + 100);
}

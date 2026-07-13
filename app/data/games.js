const BASE = import.meta.env.BASE_URL;

export const games = [
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    image: `${BASE}tic-tac-toe.png`,
    description: "Classic X/O game for two players.",
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    image: `${BASE}rock-paper-scissors.png`,
    description: "Choose rock, paper or scissors.",
  },
  {
    id: "memory-flip",
    title: "Memory Flip",
    image: `${BASE}memory-flip.jfif`,
    description: "Flip cards and find matching pairs.",
  },
  {
    id: "number-guess",
    title: "Number Guess",
    image: `${BASE}number-guess.jfif`,
    description: "Guess the hidden number.",
  },
];

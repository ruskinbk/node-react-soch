// player turn
// on click display player symbol
// check for win condition on each step
// check draw condition
// reset the game

let currentPlayer = 'X';
const squares = document.querySelectorAll('.squares');
const reset = document.querySelector('.reset');

let gameState = [
  '', '', '', '', '', '', '', '', '',
];
let isGameFinished = false;
const winConditions = [
  [0, 1, 2], [0, 3, 6], [1, 4, 7], [3, 5, 8],
  [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6],
];

squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    if (isGameFinished) return;

    if (gameState[index] === '') {
      gameState[index] = currentPlayer;
      square.textContent = currentPlayer;

      if (checkWin()) {
        isGameFinished = true;
        return;
      }
  
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkWin() {
  let won = false;
  for (let i = 0; i < winConditions.length; i++) {
    const win = winConditions[i];
    if (gameState[win[0]] !== '' && gameState[win[0]] === gameState[win[1]] && gameState[win[1]] === gameState[win[2]]) {
      won = true;
      break;
    }
  }

  return won;
}

reset.addEventListener('click', () => {
  gameState = [
    '', '', '', '', '', '', '', '', '',
  ];
  currentPlayer = 'X';
  isGameFinished = false;
  squares.forEach((square) => square.textContent = '');
});
const assignStartBtn = (initGame) => {
  const startBtn = document.getElementById('start-game');
  startBtn.onclick = initGame;
}

const displayBoard = () => {
  const board = document.getElementById('board');
  board.hidden = !board.hidden;
};

const hidePlayerTurn = () => {
  const playerTurnLabel = document.getElementById('message');
  playerTurnLabel.hidden = true;
};

const disableButtons = () => {
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].disabled = true;
  }
};

const showWinner = (player) => {
  const winnerResult = document.getElementById('game-result');
  winnerResult.innerHTML = `${player} has won`;
}

const displayPlayerTurn = (currentPlayer) => {
  const msgEl = document.getElementById('messages');
  msgEl.innerHTML = '';
  msgEl.className = 'text-dark';
  msgEl.innerHTML = `${currentPlayer.name}'s turn`;
};

export { assignStartBtn, displayBoard, hidePlayerTurn, displayPlayerTurn };
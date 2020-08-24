const displayBoard = () => {
  const board = document.getElementById('board');
  board.hidden = !board.hidden;
};

const hidePlayerTurn = () => {
  const playerTurnLabel = document.getElementById('messages');
  playerTurnLabel.hidden = true;
};

const enableButtons = () => {
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].disabled = false;
  }
};

const disableButtons = () => {
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].disabled = true;
  }
};

const showWinner = (player = null) => {
  const winnerResult = document.getElementById('game-result');

  if (player) {
    winnerResult.innerHTML = `${player.name} has won`;
  } else {
    winnerResult.innerHTML = "It's a draw";
  }
};

const displayPlayerTurn = (currentPlayer) => {
  const msgEl = document.getElementById('messages');
  msgEl.innerHTML = '';
  msgEl.className = 'text-dark';
  msgEl.innerHTML = `${currentPlayer.name}'s turn`;
};

const displayError = (error) => {
  const msgEl = document.getElementById('messages');
  msgEl.innerHTML = '';
  const inputError = 'w-75 mx-auto form-control border border-danger';

  let ul = document.createElement('ul');
  const li = document.createElement('li');
  li.className = 'list-group-item border border-0';
  li.innerHTML = error.message;
  ul.appendChild(li)
  msgEl.appendChild(ul);

  const msgError = 'text-danger';
  msgEl.classList.add(msgError);
};

const assignCells = (cellSelector) => {
  for (let i = 0; i < 9; i += 1) {
    const cell = document.getElementById(`pos${i}`);
    cell.onclick = () => cellSelector(i);
  }
};

const assignStartBtn = (initGame) => {
  const startBtn = document.getElementById('start-game');
  startBtn.onclick = initGame;
};

const getPlayersNames = () => {
  const player1Name = document.getElementById('player-one').value;
  const player2Name = document.getElementById('player-two').value;

  return [ player1Name, player2Name ];
};

const hidePlayersForm = () => {
  const playersForm = document.getElementById('players-form');
  playersForm.hidden = true;
};

const updateCell = (cellIdx, player) => {
  const cell = document.getElementById(`pos${cellIdx}`);
  cell.innerHTML = player.symbol;
  cell.disabled = true;
};

export {
  assignStartBtn, getPlayersNames, displayError, hidePlayersForm,
  assignCells, displayBoard, enableButtons, updateCell, showWinner, displayPlayerTurn,
  disableButtons, hidePlayerTurn,
};
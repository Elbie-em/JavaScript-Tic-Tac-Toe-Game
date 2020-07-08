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

const showWinner = (player = null) => {
  const winnerResult = document.getElementById('game-result');

  if(player) {
    winnerResult.innerHTML = `${player} has won`;
  } else {
    winnerResult.innerHTML = "It's a draw";
  }
}

const displayPlayerTurn = (currentPlayer) => {
  const msgEl = document.getElementById('messages');
  msgEl.innerHTML = '';
  msgEl.className = 'text-dark';
  msgEl.innerHTML = `${currentPlayer.name}'s turn`;
};

const displayError = (error) => {
  let msgEl = document.getElementById("messages");
  msgEl.innerHTML = "";
  const resetClass = 'w-75 mx-auto form-control border border-secondary';
  const inputError = 'w-75 mx-auto form-control border border-danger';
  let msgs = [];

  for(let i = 0; i < error.messages.length; i += 1) {
    let input = document.getElementById(error.messages[i].input);
    input.className = inputError;
    let li = document.createElement('li');
    li.className = 'list-group-item border border-0';
    li.innerHTML = error.messages[i].msg;
    msgEl.appendChild(li);
  }

  const msgError = 'text-danger';
  msgEl.classList.add(msgError);
};

export { assignStartBtn, disableButtons, displayBoard, hidePlayerTurn, displayPlayerTurn, showWinner, displayError };
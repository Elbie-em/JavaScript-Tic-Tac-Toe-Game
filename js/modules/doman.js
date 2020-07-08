const doman = (() => {
})();

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
  const playerTurnLabel = document.getElementById('message');
  playerTurnLabel.className = 'text-dark';
  playerTurnLabel.innerHTML = `${currentPlayer.name}'s turn`;
};
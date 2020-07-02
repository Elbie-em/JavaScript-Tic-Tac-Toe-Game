let gameBoard = ['','','','','','','','',''];

const Game = (players) => {
  let currentUser = players[0];

  const selectCell = () => {
    this.innerHTML = 'X';
  }

  const changeUserTurn = () => {
    currentUser = currentUser.id == 1 ? players[1] : players[0];
  }

  return { players, selectCell, changeUserTurn };
}

const printBoard = () => {
  for(let i = 0; i < gameBoard.length; i++) {
    let cell = document.getElementById(`pos${i}`);
    cell.onclick = selectCell.bind(cell);
  }
}

const initGame = () => {

  // instantiate players
  const player1Name = document.getElementById("player-one").value;
  const player2Name = document.getElementById("player-two").value;
  
  const player1 = {id: 1, name: player1Name, symbol: 'X'};
  const player2 = {id: 2, name: player2Name, symbol: 'O'};
  const players = [player1, player2];

  let game = Game(players);

  // hide players form
  let playersForm = document.getElementById("players-form");
  playersForm.hidden = true;
  let cells = document.getElementsByClassName("cell");
  // enable the board
  for(let i = 0; i < cells.length; i++) {
    cells[i].disabled = false;
  }

  // ask player 1 to play
  let playerTurnLabel = document.getElementById("player-turn-label");
  playerTurnLabel.innerHTML = `${player1.name}'s turn`;
  // check if the player has won display as winner if won
  // ask player 2 to play if player 1 didn t win display as winner if won
  // if board if full set draw
  // repeat if none of the conditions to finish are met
}

const render = () => {
  printBoard();
}

window.onload = () => {
  render();
}
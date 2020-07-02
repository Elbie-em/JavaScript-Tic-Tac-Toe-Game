window.onload = () => {
  let board = document.getElementById("board");
  board.hidden = true;
}

let gameBoard = ['','','','','','','','',''];

const Game = (players) => {
  let currentPlayer = players[0];

  const start = () => {
    assignCells();
    displayPlayerTurn(currentPlayer);
  }

  const selectCell = () => {
    let id = (event.target.id);
    el = document.getElementById(id)
    el.innerHTML = currentPlayer.symbol;
    gameBoard[id[3]] = el.innerHTML
    el.disabled = true;
    changePlayerTurn();
  }

  const changePlayerTurn = () => {
    currentPlayer = currentPlayer.id == 1 ? players[1] : players[0];
    displayPlayerTurn(currentPlayer);
  }

  const displayPlayerTurn = (currentPlayer) => {
    let playerTurnLabel = document.getElementById("player-turn-label");
    playerTurnLabel.innerHTML = `${currentPlayer.name}'s turn`;
  }

  const assignCells = () => {
    for(let i = 0; i < gameBoard.length; i++) {
      let cell = document.getElementById(`pos${i}`);
      cell.onclick = selectCell.bind(cell);
    }
  }

  return { start, players, selectCell, currentPlayer, changePlayerTurn };
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
  board.hidden = false;
  let cells = document.getElementsByClassName("cell");
  // enable the board
  for(let i = 0; i < cells.length; i++) {
    cells[i].disabled = false;
  }

  game.start();
  // check if the player has won display as winner if won
  // ask player 2 to play if player 1 didn t win display as winner if won
  // if board if full set draw
  // repeat if none of the conditions to finish are met
}


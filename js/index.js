window.onload = () => {
  let board = document.getElementById("board");
  board.hidden = true;
}

let gameBoard = ['','','','','','','','',''];

const Game = (players) => {
  let currentPlayer = players[0];
  let finished = false;
  let number_cells_selected = 0;

  const start = () => {
    assignCells();
    displayPlayerTurn(currentPlayer);
  }

  const checkWinner = () => {
    let p1_moves = [];
    let p2_moves = [];

    const winning_combinations = [[0, 1, 2],
               [3, 4, 5],
               [6, 7, 8],
               [0, 3, 6],
               [1, 4, 7],
               [2, 5, 8],
               [0, 4, 8],
               [2, 4, 6]];

    gameBoard.forEach((val, idx) => {
      if(val == 'X') p1_moves.push(idx);
      if(val == 'O') p2_moves.push(idx);
    });

    for(let i = 0; i < winning_combinations.length; i++) {
      const reg = new RegExp(winning_combinations[i].join(".*"));
      let winnerResult = document.getElementById("game-result");
  
      if(reg.test(p1_moves.join(""))) {
        winnerResult.innerHTML = `${players[0].name} has won`;
        disableButtons();
        hidePlayerTurn();
        break;
      }
      else if (reg.test(p2_moves.join(""))) {
        winnerResult.innerHTML = `${players[1].name} has won`;
        disableButtons();
        hidePlayerTurn();
        break;
      }
      else if(number_cells_selected == 9) {
        winnerResult.innerHTML = "It's a draw";
        hidePlayerTurn();
      }
    }
  }

  const selectCell = () => {
    let id = (event.target.id);
    el = document.getElementById(id);
    el.innerHTML = currentPlayer.symbol;
    gameBoard[id[3]] = el.innerHTML;
    number_cells_selected++;
    el.disabled = true;
    checkWinner();
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

  const hidePlayerTurn = () => {
    let playerTurnLabel = document.getElementById("player-turn-label");
    playerTurnLabel.hidden = true;
  }

  const assignCells = () => {
    for(let i = 0; i < gameBoard.length; i++) {
      let cell = document.getElementById(`pos${i}`);
      cell.onclick = selectCell.bind(cell);
    }
  }

  const disableButtons = () => {
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length; i++) {
      cells[i].disabled = true;
    }    
  }

  return { start, players, selectCell, currentPlayer, changePlayerTurn };
}

const Player = (id,name,symbol) => {
  return {id,name,symbol}
}

const initGame = () => {
  const player1Name = document.getElementById("player-one").value;
  const player2Name = document.getElementById("player-two").value;
  
  const player1 = Player(1,player1Name,'X');
  const player2 =  Player(2,player2Name,'O');

  const players = [player1, player2];

  let game = Game(players);

  let playersForm = document.getElementById("players-form");
  playersForm.hidden = true;
  board.hidden = false;
  let cells = document.getElementsByClassName("cell");

  for(let i = 0; i < cells.length; i++) {
    cells[i].disabled = false;
  }

  game.start();
}

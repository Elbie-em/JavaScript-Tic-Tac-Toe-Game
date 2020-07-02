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

    // winning_combinations.forEach((value) => {
    for(let i = 0; i < winning_combinations.length; i++) {
      const reg = new RegExp(winning_combinations[i].join(".*"));
      let winnerResult = document.getElementById("game-result");
      console.log("==========================================");
      console.log(`reg: ${reg}`);
      console.log(`p1_moves: ${p1_moves.join("")}`);
      console.log(reg.test(p1_moves.join("")));


      if(reg.test(p1_moves.join(""))) {
        console.log("enter");
        winnerResult.innerHTML = `${players[0].name} has won`;
        disableButtons();
        break;
      }
      else if (reg.test(p2_moves.join(""))) {
        winnerResult.innerHTML = `${players[1].name} has won`;
        disableButtons();
        break;
      }
      else if(number_cells_selected == 9) {
        winnerResult.innerHTML = "It's a draw";
      }
    };
  }

  const selectCell = () => {
    let id = (event.target.id);
    el = document.getElementById(id)
    el.innerHTML = currentPlayer.symbol;
    gameBoard[id[3]] = el.innerHTML
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

  const assignCells = () => {
    for(let i = 0; i < gameBoard.length; i++) {
      let cell = document.getElementById(`pos${i}`);
      cell.onclick = selectCell.bind(cell);
    }
  }

  const disableButtons = () => {
    let cells = document.getElementsByClassName("cell");
    // enable the board
    for(let i = 0; i < cells.length; i++) {
      cells[i].disabled = true;
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


//////////////////////////////////////////////////////////
// let board = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X'];

// for(let i = 0; i < 3; i++) {
//   // [0, 1, 2, 3, 4, 5, 6, 7, 8]
//   const row = board.slice(i * 3, (i * 3) + 3);
//   const winner = [...new Set(row)].length == 1 ? true : false;
//   console.log(row);
//   console.log(winner);
// }

// let diagonals = [0, 1, 2].reduce((acc, idx) => {
//   acc[0].push(board[idx * 4]);
//   acc[1].push(board[idx * 2 + 2]);
//   return acc;
// }, [[],[]]);

// console.log(diagonals);
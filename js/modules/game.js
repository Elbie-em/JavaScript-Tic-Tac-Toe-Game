import * as Doman from './doman.js';
const gameBoard = ['', '', '', '', '', '', '', '', ''];

const Game = (players) => {
  let currentPlayer = players[0];
  let numberCellsSelected = 0;

  const disableButtons = () => {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i += 1) {
      cells[i].disabled = true;
    }
  };

  const checkWinner = () => {
    const p1Moves = [];
    const p2Moves = [];

    const winningCombinations = [[0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]];

    gameBoard.forEach((val, idx) => {
      if (val === 'X') p1Moves.push(idx);
      if (val === 'O') p2Moves.push(idx);
    });

    for (let i = 0; i < winningCombinations.length; i += 1) {
      const reg = new RegExp(winningCombinations[i].join('.*'));
      const winnerResult = document.getElementById('game-result');

      if (reg.test(p1Moves.join(''))) {
        winnerResult.innerHTML = `${players[0].name} has won`;
        disableButtons();
        Doman.hidePlayerTurn();
        break;
      } else if (reg.test(p2Moves.join(''))) {
        winnerResult.innerHTML = `${players[1].name} has won`;
        disableButtons();
        Doman.hidePlayerTurn();
        break;
      } else if (numberCellsSelected === 9) {
        winnerResult.innerHTML = "It's a draw";
        Doman.hidePlayerTurn();
      }
    }
  };

  const displayPlayerTurn = (currentPlayer) => {
    const playerTurnLabel = document.getElementById('message');
    playerTurnLabel.className = 'text-dark';
    playerTurnLabel.innerHTML = `${currentPlayer.name}'s turn`;
  };

  const changePlayerTurn = () => {
    currentPlayer = currentPlayer.id === 1 ? players[1] : players[0];
    displayPlayerTurn(currentPlayer);
  };

  const selectCell = () => {
    const { id } = event.target; // eslint-disable-line no-restricted-globals
    const el = document.getElementById(id);
    el.innerHTML = currentPlayer.symbol;
    gameBoard[id[3]] = el.innerHTML;
    numberCellsSelected += 1;
    el.disabled = true;
    checkWinner();
    changePlayerTurn();
  };

  const assignCells = () => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      const cell = document.getElementById(`pos${i}`);
      cell.onclick = selectCell.bind(cell);
    }
  };

  const start = () => {
    assignCells();
    displayPlayerTurn(currentPlayer);
  };

  return {
    start, players, selectCell, currentPlayer, changePlayerTurn,
  };
};

export { Game }; // eslint-disable-line import/prefer-default-export
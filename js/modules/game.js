import * as Doman from './doman.js';
const gameBoard = ['', '', '', '', '', '', '', '', ''];

const Game = (players) => {
  let currentPlayer = players[0];
  let numberCellsSelected = 0;

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

      if (reg.test(p1Moves.join(''))) {
        Doman.showWinner(players[0].name);
        Doman.disableButtons();
        Doman.hidePlayerTurn();
        break;
      } else if (reg.test(p2Moves.join(''))) {
        Doman.showWinner(players[1].name);
        Doman.disableButtons();
        Doman.hidePlayerTurn();
        break;
      } else if (numberCellsSelected === 9) {
        Doman.showWinner();
        Doman.hidePlayerTurn();
      }
    }
  };

  const changePlayerTurn = () => {
    currentPlayer = currentPlayer.id === 1 ? players[1] : players[0];
    Doman.displayPlayerTurn(currentPlayer);
  };

  const pasteSymbol = (id, currentPlayer) => {
    const el = document.getElementById(id);
    el.innerHTML = currentPlayer.symbol;
    return currentPlayer.symbol;
  }

  const selectCell = () => {
    const { id } = event.target; // eslint-disable-line no-restricted-globals
    // let cell = event.target;
    // const el = document.getElementById(id);
    cell.innerHTML = currentPlayer.symbol;
    // gameBoard[cell.id[3]] = cell.innerHTML;
    gameBoard[id[3]] = pasteSymbol(id, currentPlayer);
    numberCellsSelected += 1;
    cell.disabled = true;
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
    Doman.displayPlayerTurn(currentPlayer);
  };

  return {
    start, players, selectCell, currentPlayer, changePlayerTurn,
  };
};

export { Game }; // eslint-disable-line import/prefer-default-export
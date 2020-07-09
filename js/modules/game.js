let gameBoard = new Array(9);
let players = [];
let currentPlayer;
let numberCellsSelected = 0;

// const checkWinner = () => {
//   const p1Moves = [];
//   const p2Moves = [];

//   const winningCombinations = [[0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]];

//   gameBoard.forEach((val, idx) => {
//     if (val === 'X') p1Moves.push(idx);
//     if (val === 'O') p2Moves.push(idx);
//   });

//   for (let i = 0; i < winningCombinations.length; i += 1) {
//     const reg = new RegExp(winningCombinations[i].join('.*'));

//     if (reg.test(p1Moves.join(''))) {
//       Doman.showWinner(players[0].name);
//       Doman.disableButtons();
//       Doman.hidePlayerTurn();
//       break;
//     } else if (reg.test(p2Moves.join(''))) {
//       Doman.showWinner(players[1].name);
//       Doman.disableButtons();
//       Doman.hidePlayerTurn();
//       break;
//     } else if (numberCellsSelected === 9) {
//       Doman.showWinner();
//       Doman.hidePlayerTurn();
//     }
//   }
// };

const changePlayerTurn = () => {
  currentPlayer = currentPlayer.id === 1 ? players[1] : players[0];
  return currentPlayer;
};

const selectCell = (cellIdx) => {
  gameBoard[cellIdx] = currentPlayer.symbol;
  numberCellsSelected += 1;
};

const start = (users) => {
  players = [...users];
  [currentPlayer] = users;
};

const checkPlayersNames = ({player1Name, player2Name}) => {
  let messages = [];
  let errCode = 0;

  if (player1Name === '') {
    messages.push({input: 'player-one', msg: 'Please, enter valid name for player1'});
    errCode = -1;
  }

  if (player2Name === '') {
    messages.push({input: 'player-two', msg: 'Please, enter valid name for player2'});
    errCode = -1;
  }

  if (player1Name === player2Name && player1Name !== '') {
    messages.push({input: 'player-two', msg: 'Names must be unique'});
    errCode = -1;
  }

  return {errCode, messages};
}

export { start, checkPlayersNames, selectCell, currentPlayer, numberCellsSelected, changePlayerTurn, checkWinner };
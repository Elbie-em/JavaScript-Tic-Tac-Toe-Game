let gameBoard = new Array(9);
let players = [];
let currentPlayer;
let numberCellsSelected = 0;
let winner;

const checkWinner = () => {
  // we are just assuming that the current user is the winner we need to change that
  const checkPlayers = (combination) => {
    const unified = [...new Set(combination)];

    return (unified.length === 1 && unified[0] !== "") ? unified[0] : false;
  }

  let diag1 = [];
  let diag2 = [];

  for(let i = 0; i < 3; i += 1) {
    const row = gameBoard.slice(i * 3, i * 3 + 2);
    if(checkPlayers(row)) return winner = currentPlayer;
    const col = [gameBoard[i], gameBoard[i + 3], gameBoard[i + 6]];
    if(checkPlayers(col)) return winner = currentPlayer;

    diag1.push(i * 4);
    diag2.push(i * 2 + 2);
  }

  if(checkPlayers(diag1)) return winner = currentPlayer;
  if(checkPlayers(diag2)) return winner = currentPlayer;

  return null;
};

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
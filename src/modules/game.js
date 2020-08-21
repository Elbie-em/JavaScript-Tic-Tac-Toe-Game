const gameBoard = new Array(9);
let players = [{id: 1, name: 'First Player', symbol: 'X'},
               {id: 2, name: 'Second Player', symbol: 'O'}];
let currentPlayer;
let numberCellsSelected = 0;
let winner;

const createPlayer = (playerName) => {
  const result = validatePlayerName(name);

  if(result.code) {
    return {id, name, symbol};
  }

  return result;
};

const validatePlayer = (playerName) => {
  const messages = [];
  let code = 0;

  if (playerName === '') {
    messages.push({msg: 'Please, enter valid name for the player'});
    code = -1;
  }

  if (players.any(player => player === playerName)) {
    messages.push({msg: 'Names of the user was already taken'});
    code = -1;
  }

  if (pla)
  if(code === 0) players.push(playerName);

  return { errCode, messages };
};


const getCurrentPlayer = () => currentPlayer;

const getNumberCellsSelected = () => numberCellsSelected;

const checkWinner = () => {
  const checkPlayers = (combination) => {
    const unified = [...new Set(combination)];

    return (unified.length === 1 && unified[0] !== '') ? unified[0] : false;
  };

  const diag1 = [];
  const diag2 = [];

  for (let i = 0; i < 3; i += 1) {
    const row = gameBoard.slice(i * 3, i * 3 + 3);
    if (checkPlayers(row)) {
      winner = currentPlayer;
      return winner;
    }
    const col = [gameBoard[i], gameBoard[i + 3], gameBoard[i + 6]];
    if (checkPlayers(col)) {
      winner = currentPlayer;
      return winner;
    }

    diag1.push(gameBoard[i * 4]);
    diag2.push(gameBoard[i * 2 + 2]);
  }

  if (checkPlayers(diag1)) {
    winner = currentPlayer;
    return winner;
  }
  if (checkPlayers(diag2)) {
    winner = currentPlayer;
    return winner;
  }

  return null;
};

const changePlayerTurn = (player) => {
  currentPlayer = currentPlayer.id === 1 ? players[1] : players[0];
  return currentPlayer;
};

const selectCell = (cellIdx, currentPlayer) => {
  gameBoard[cellIdx] = currentPlayer.symbol;
  numberCellsSelected += 1;
};

const start = (users) => {
  players = [...users];
  [currentPlayer] = users;
};

const checkPlayersNames = ({ player1Name, player2Name }) => {
  const messages = [];
  let errCode = 0;

  if (player1Name === '') {
    messages.push({ input: 'player-one', msg: 'Please, enter valid name for player1' });
    errCode = -1;
  }

  if (player2Name === '') {
    messages.push({ input: 'player-two', msg: 'Please, enter valid name for player2' });
    errCode = -1;
  }

  if (player1Name === player2Name && player1Name !== '') {
    messages.push({ input: 'player-two', msg: 'Names must be unique' });
    errCode = -1;
  }

  return { errCode, messages };
};

export {
  start, checkPlayersNames, selectCell, changePlayerTurn,
  checkWinner, getCurrentPlayer, getNumberCellsSelected,
};
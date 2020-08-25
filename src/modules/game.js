import { isUnique, areNotEmpty } from './array-functions';
const gameBoard = new Array(9);
let players = [];
let currentPlayer;
let numberCellsSelected = 0;
let winner;

const getBoard = () => gameBoard;

const validatePlayersNames = (playersNames) => {
  let result;

  switch(true) {
    case !areNotEmpty(playersNames):
      result = {code: -2, message: "Name(s) cannot be empty"};
      break;
    case !isUnique(playersNames):
      result = {code: -1, message: "Names are not unique"};
      break;
    default:
      result = {code: 0, message: "OK"};
  }

  return result;
};

const addPlayer = (id, name) => {
  const symbol = id === 1 ? 'X' : 'O';

  players.push({id, name, symbol});
};

const addPlayers = (players) => {
  players.forEach((player, idx) => addPlayer(idx + 1, player));
};

const setCurrentPlayer = () => currentPlayer = currentPlayer.id === 1? players[1] : players[0];
const getCurrentPlayer = () => currentPlayer;

const getNumberCellsSelected = () => numberCellsSelected;
const incrementCellsSelected = () => numberCellsSelected++;

const checkPlayers = (combination) => {
  const unified = [...new Set(combination)];

  return (unified.length === 1 && (unified[0] || '') !== '') ? unified[0] : false;
};

const checkWinner = (gameBoard) => {
  const diag1 = [];
  const diag2 = [];
  let player;

  for (let i = 0; i < 3; i += 1) {
    const row = gameBoard.slice(i * 3, i * 3 + 3);
    player = checkPlayers(row);

    if (player) return player;

    const col = [gameBoard[i], gameBoard[i + 3], gameBoard[i + 6]];
    player = checkPlayers(col);

    if (player) return player;

    diag1.push(gameBoard[i * 4]);
    diag2.push(gameBoard[i * 2 + 2]);
  }

  player = checkPlayers(diag1);
  if (player) return winner;

  player = checkPlayers(diag2);
  if (player) return winner;

  return null;
};

const selectCell = (cellIdx, playerId) => gameBoard[cellIdx] = playerId;

const start = () => {
  let result;

  if (players.length === 2) {
    [currentPlayer] = players;
    result = {code: 0, message: 'OK' };
  } else {
    result = {code: -1, message: 'Players not set'};
  }

  return result;
};

const getPlayerById = (id) => {
  return players.filter(p => p.id === id)[0];
};

export {
  start, validatePlayersNames, addPlayers, selectCell, setCurrentPlayer,
  checkWinner, getCurrentPlayer, getNumberCellsSelected, getBoard,
  incrementCellsSelected, getPlayerById
};
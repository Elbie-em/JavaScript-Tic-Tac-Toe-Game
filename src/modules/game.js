function* generateId() {
  let i = 1;
  while(i < 3)
  yield i++;
}

const Game = () => {
  let gameBoard = new Array(9);
  let players = [];
  let currentPlayer;
  let numberCellsSelected = 0;
  let winner;
  let numberOfPlayers = generateId();

  const genPlayerId = () => numberOfPlayers.next().value;

  const validatePlayerName = (name) => {
    const unique = !players.some(player => player.name === name);

    return unique && name.trim();
  };

  const addPlayer = (name) => {
    const validUserName = validatePlayerName(name);
    if(validUserName) {
      const id = genPlayerId();
      const symbol = id === 1 ? 'X' : 'O';

      players.push({id, name, symbol});
    } else {
      return Error('user not added');
    }
  };

  const getCurrentPlayer = () => currentPlayer;

  const getNumberCellsSelected = () => numberCellsSelected;

  const showPlayers = () => players; // temporal
  
  const checkPlayers = (combination) => {
    const unified = [...new Set(combination)];

    return (unified.length === 1 && unified[0] !== '') ? unified[0] : false;
  };

  const checkWinner = () => {
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

  const changeCurrentPlayer = (playerId) => {
    // validate that the user is either 1 or 2
    currentPlayer = playerId;
  };

  const selectCell = (cellIdx, currentPlayer) => {
    // check cell availability
    gameBoard[cellIdx] = currentPlayer.symbol;
    numberCellsSelected += 1;
  };

  const start = () => {
    // check if there are players
    changeCurrentPlayer(players[0].id);
  };

  return {genPlayerId,
          validatePlayerName,
          addPlayer,
          showPlayers};
};

export default Game;
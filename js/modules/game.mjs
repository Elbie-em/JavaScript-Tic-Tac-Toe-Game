const Game = (players) => {
  let gameBoard = new Array(9);
  let players;
  let [currentPlayer] = players;
  let numberCellsSelected = 0;
  let started = false;
  let winner;

  const checkWinner = (gameBoard) => {
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
    displayPlayerTurn(currentPlayer);
  };

  const selectCell = (callback) => {
    gameBoard[id[3]] = currentPlayer.symbol;
    numberCellsSelected += 1;

    if(callback) callback();

    // const { id } = event.target; // eslint-disable-line no-restricted-globals
    // console.log(event.target);
    // const el = document.getElementById(id);
    // el.innerHTML = currentPlayer.symbol;


    // el.disabled = true;
    // if(checkWinner(gameBoard)) callback();
    // changePlayerTurn();
  };

  const start = (players) => {
    this.players = players;
  };

  return {
    start, players, selectCell, currentPlayer, changePlayerTurn,
  };
};

export { Game };
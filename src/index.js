import * as Doman from './modules/doman.js';
import * as Game from './modules/game.js';
import Player from './modules/player.js';
import './css/styles.css';

const selectCell = (cellIdx) => {
  const currentPlayer = Game.getCurrentPlayer();
  Game.selectCell(cellIdx, currentPlayer);
  Doman.updateCell(cellIdx, currentPlayer);
  Game.incrementCellsSelected();
  const winner = Game.checkWinner(Game.getBoard());

  if (winner || Game.getNumberCellsSelected() === 9) {
    Doman.showWinner(winner);
    Doman.disableButtons();
    Doman.hidePlayerTurn();
  } else {
    Game.setCurrentPlayer();
    Doman.displayPlayerTurn(Game.getCurrentPlayer());
  }
};

const initGame = () => {
  const playersNames = Doman.getPlayersNames();

  let validNames = Game.validatePlayersNames(playersNames);

  if (validNames.code === 0) {
    Game.addPlayers(playersNames);
    Doman.hidePlayersForm();
    Doman.assignCells(selectCell);
    Game.start();
    Doman.displayPlayerTurn(Game.getCurrentPlayer());
    Doman.displayBoard();
    Doman.enableButtons();
  } else {
    Doman.displayError(validNames);
  }
};

window.onload = () => {
  Doman.assignStartBtn(initGame);
};
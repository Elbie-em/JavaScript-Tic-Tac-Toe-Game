import * as Doman from './modules/doman';
import * as Game from './modules/game';
import './css/styles.css';

const selectCell = (cellIdx) => {
  const CURRENT_PLAYER = Game.getCurrentPlayer();
  Game.selectCell(cellIdx, CURRENT_PLAYER.id);
  Doman.updateCell(cellIdx, CURRENT_PLAYER.symbol);
  Game.incrementCellsSelected();
  const WINNER_ID = Game.checkWinner(Game.getBoard());

  if (WINNER_ID || Game.getNumberCellsSelected() === 9) {
    const WINNER = Game.getPlayerById(WINNER_ID);
    Doman.showWinner(WINNER);
    Doman.disableButtons();
    Doman.hidePlayerTurn();
  } else {
    Game.setCurrentPlayer();
    Doman.displayPlayerTurn(Game.getCurrentPlayer());
  }
};

const initGame = () => {
  const playersNames = Doman.getPlayersNames();

  const validNames = Game.validatePlayersNames(playersNames);

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
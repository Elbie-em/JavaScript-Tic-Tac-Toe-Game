import * as Doman from './modules/doman.js';
import * as Game from './modules/game.js';
import Player from './modules/player.js';

const selectCell = (cellIdx) => {
  const currentPlayer = Game.currentPlayer;
  Doman.updateCell(cellIdx, currentPlayer);
  Game.selectCell(cellIdx);
  const winner = Game.checkWinner();

  if(winner) {
    Doman.showWinner(currentPlayer);
  } else if (Game.numberCellsSelected === 9) {
    Doman.showWinner();
  } else {
    Game.changePlayerTurn();
  }
}

const initGame = () => {
  const playersNames = Doman.getPlayersNames();
  const result = Game.checkPlayersNames(playersNames);

  if(result.errCode) {
    Doman.displayError(result);
  } else {
    const player1 = Player(1, playersNames.player1Name, 'X');
    const player2 = Player(2, playersNames.player2Name, 'O');
    const players = [player1, player2];

    Doman.hidePlayersForm();
    Doman.assignCells(selectCell);
    Game.start(players);
    Doman.displayBoard();
    Doman.enableButtons();
  }
}

window.onload = () => {
  Doman.assignStartBtn(initGame);
};
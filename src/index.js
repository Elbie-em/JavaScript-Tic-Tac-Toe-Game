import * as Doman from './modules/doman.js';
import Game from './modules/game.js';
import Player from './modules/player.js';
import './css/styles.css';

const game = Game();

console.log(game.validatePlayerName('Abdel'));

console.log(game.addPlayer('Abdel'));
console.log(game.addPlayer('Elbie'));
console.log(game.showPlayers());

console.log
// const selectCell = (cellIdx) => {
//   const currentPlayer = Game.getCurrentPlayer();
//   Game.selectCell(cellIdx, currentPlayer);
//   Doman.updateCell(cellIdx, currentPlayer);
//   const winner = Game.checkWinner();

//   if (winner || Game.getNumberCellsSelected() === 9) {
//     Doman.showWinner(winner);
//     Doman.disableButtons();
//     Doman.hidePlayerTurn();
//   } else {
//     Game.changePlayerTurn();
//     Doman.displayPlayerTurn(Game.getCurrentPlayer());
//   }
// };

// const initGame = () => {
//   const playersNames = Doman.getPlayersNames();

//   Game.addPlayer(playersNames.player1Name);
//   Game.addPlayer(playersNames.player2Name);
//   Game.start();

//   if(Game.started) {
//     Doman.hidePlayersForm();
//     Doman.assignCells(selectCell);
//     Doman.displayPlayerTurn(Game.getCurrentPlayer());
//     Doman.displayBoard();
//     Doman.enableButtons();
//   } else {
//     Doman.displayError(Game.errors);
//   }
// };

// window.onload = () => {
//   Doman.assignStartBtn(initGame);
// };
import * as Doman from './modules/doman.js';
import { Game } from './modules/game.js';
import Player from './modules/player.js';

const displayError = (error) => {
  let msgEl = document.getElementById("messages");
  msgEl.innerHTML = "";
  const resetClass = 'w-75 mx-auto form-control border border-secondary';
  const inputError = 'w-75 mx-auto form-control border border-danger';
  let msgs = [];
  // input.className = resetClass;

  for(let i = 0; i < error.messages.length; i += 1) {
    let input = document.getElementById(error.messages[i].input);
    input.className = inputError;
    let li = document.createElement('li');
    li.className = 'list-group-item border border-0';
    li.innerHTML = error.messages[i].msg;
    msgEl.appendChild(li);
  }

  const msgError = 'text-danger';
  msgEl.classList.add(msgError);
};

const checkPlayersNames = (player1Name, player2Name) => {
  let messages = [];
  let code = 0;

  if (player1Name === '') {
    messages.push({input: 'player-one', msg: 'Please, enter valid name for player1'});
    code = -1;
  }

  if (player2Name === '') {
    messages.push({input: 'player-two', msg: 'Please, enter valid name for player2'});
    code = -1;
  }

  if (player1Name === player2Name && player1Name !== '') {
    messages.push({input: 'player-two', msg: 'Names must be unique'});
    code = -1;
  }

  return {code, messages};
}

const initGame = () => { // eslint-disable-line no-unused-vars
  const player1Name = document.getElementById('player-one').value;
  const player2Name = document.getElementById('player-two').value;

  const result = checkPlayersNames(player1Name, player2Name);

  if(result.code) {
    displayError(result);
  } else {
    const player1 = Player(1, player1Name, 'X');
    const player2 = Player(2, player2Name, 'O');

    const players = [player1, player2];

    const game = Game(players);

    const playersForm = document.getElementById('players-form');
    playersForm.hidden = true;
    Doman.displayBoard();
    const cells = document.getElementsByClassName('cell');

    for (let i = 0; i < cells.length; i += 1) {
      cells[i].disabled = false;
    }

    game.start();
  }
};

window.onload = () => {
  Doman.assignStartBtn(initGame);
};
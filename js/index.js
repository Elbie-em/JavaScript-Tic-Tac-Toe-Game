import * as Doman from './modules/doman.js';
import { Game } from './modules/game.js';
import Player from './modules/player.js';

const displayError = (player1, player2) => {
  const resetClass = 'w-75 mx-auto form-control border border-secondary';
  const p1Input = document.getElementById('player-one');
  p1Input.className = resetClass;
  const p2Input = document.getElementById('player-two');
  p2Input.className = resetClass;

  const inputError = 'w-75 mx-auto form-control border border-danger';
  let msg = 'Please, enter valid ';

  if (player1 === '') {
    msg += ' name for player1';
    p1Input.className = inputError;
  }

  if (player2 === '') {
    msg += ' name for player2';

    p2Input.className = inputError;
  }

  if (player1 === '' && player2 === '') {
    msg = 'Please, enter valid user names';
  }

  if (msg !== 'Please, enter valid ') {
    const msgEl = document.getElementById('message');
    const msgError = 'text-danger';
    msgEl.innerHTML = msg;
    msgEl.classList.add(msgError);
  }
};

const checkPlayersNames = (player1Name, player2Name) => {
  let errors = [];
  let code = 0;

  if (player1 === '') {
    errors.push({player: 1, msg: 'Please, enter valid name for player1'});
  }

  if (player2 === '') {
    errors.push({player: 2, msg: 'Please, enter valid name for player2'});
  }
  return errors;
}

const initGame = () => { // eslint-disable-line no-unused-vars
  const player1Name = document.getElementById('player-one').value;
  const player2Name = document.getElementById('player-two').value;

  const result = checkPlayersNames(player1Name, player2Name);

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
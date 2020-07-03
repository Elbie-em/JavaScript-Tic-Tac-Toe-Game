import { Game } from './modules/game.js'; // eslint-disable-line import/extensions

const Player = (id, name, symbol) => ({ id, name, symbol });

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

const displayboard = () => {
  const board = document.getElementById('board');
  board.hidden = !board.hidden;
};

const initGame = () => { // eslint-disable-line no-unused-vars
  const player1Name = document.getElementById('player-one').value;
  const player2Name = document.getElementById('player-two').value;

  if (player1Name === '' || player2Name === '') {
    displayError(player1Name, player2Name);
  } else if (player1Name === player2Name) {
    const msgEl = document.getElementById('message');
    msgEl.innerHTML = 'Player names must be unique!';
    msgEl.className = 'text-danger';
  } else {
    const player1 = Player(1, player1Name, 'X');
    const player2 = Player(2, player2Name, 'O');

    const players = [player1, player2];

    const game = Game(players);

    const playersForm = document.getElementById('players-form');
    playersForm.hidden = true;
    displayboard();
    const cells = document.getElementsByClassName('cell');

    for (let i = 0; i < cells.length; i += 1) {
      cells[i].disabled = false;
    }

    game.start();
  }
};


window.onload = () => {
  const startBtn = document.getElementById('start-game');
  startBtn.onclick = initGame;
  displayboard();
};
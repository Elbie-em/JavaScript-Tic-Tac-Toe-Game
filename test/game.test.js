import * as Game from '../src/modules/game';

describe('Validation checks for players names', () => {
  test('return error message stating name cannot be empty for player one', () => {
    const players = ['', 'exampleName'];
    expect(Game.validatePlayersNames(players).message).toEqual('Name(s) cannot be empty');
  });

  test('return error msg stating name cannot be empty for player two', () => {
    const players = ['exampleName', ''];
    expect(Game.validatePlayersNames(players).message).toEqual('Name(s) cannot be empty');
  });

  test('return error msg stating names cannot be empty for both players', () => {
    const players = ['', ''];
    expect(Game.validatePlayersNames(players).message).toEqual('Name(s) cannot be empty');
  });

  test('return error if player names are not unique', () => {
    const players = ['exampleName', 'exampleName'];
    expect(Game.validatePlayersNames(players).message).toEqual('Names are not unique');
  });

  test('return a successful message then proceed to game play', () => {
    const players = ['exampleNameI', 'exampleNameII'];
    expect(Game.validatePlayersNames(players).message).toEqual('OK');
  });
});

describe('Validation checks for cell selection counter', () => {
  test('increments the number of cells selected', () => {
    Game.incrementCellsSelected();
    expect(Game.getNumberCellsSelected()).toBe(1);
  });
});

describe('Validation checks for check winner', () => {
  const player1WinCombination = [1, 1, 1, 2, 2, undefined, undefined, undefined, undefined];

  test('returns the id of player one when it is having a winning combination', () => {
    expect(Game.checkWinner(player1WinCombination)).toBe(1);
  });

  const player2WinCombination = [1, 1, undefined, 2, 2, 2, undefined, undefined, undefined];

  test('returns the id of player one when it is having a winning combination', () => {
    expect(Game.checkWinner(player2WinCombination)).toEqual(2);
  });

  const tieCombination = [1, 1, 2, 2, 2, 1, 1, 1, 2];

  test('returns the id of player one when it is having a winning combination', () => {
    expect(Game.checkWinner(tieCombination)).toBeNull();
  });
});

describe('Validation checks for currentPlayer turns', () => {
  Game.addPlayers(['player1', 'player2']);
  Game.start();

  test('that currentPlayer is being set when the Game starts', () => {
    expect(Game.getCurrentPlayer().id).toBe(1);
  });

  test('currentPlayer changes with setCurrentPlayer', () => {
    Game.setCurrentPlayer();
    expect(Game.getCurrentPlayer().id).toBe(2);
  });
});

describe('Validation checks for cell selection', () => {
  test('the cell is being selected by its number by player 1', () => {
    Game.selectCell(0, 1);
    expect(Game.getBoard()).toEqual([1, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined]);
  });

  test('the cell is being selected by its number by player 2', () => {
    Game.selectCell(0, 2);
    expect(Game.getBoard()).toEqual([2, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined]);
  });
});

describe('Validation check for getPlayerById', () => {
  Game.addPlayers(['player1', 'player2']);
  test('gets the player1 name with id 1', () => {
    expect(Game.getPlayerById(1).name).toBe('player1');
  });

  test('gets the player2 name with id 2', () => {
    expect(Game.getPlayerById(2).name).toBe('player2');
  });

  test('returns undefined result if player id does not exist', () => {
    expect(Game.getPlayerById(3)).toBeUndefined();
  });
});
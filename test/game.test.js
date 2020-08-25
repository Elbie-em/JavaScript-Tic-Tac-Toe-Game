import * as Game from '../src/modules/game';

describe('Validation checks for players names', () => {
  test('return error message stating name cannot be empty for player one', () => {
    const players = ['','exampleName'];
    expect(Game.validatePlayersNames(players).message).toEqual("Name(s) cannot be empty");
  });

  test('return error msg stating name cannot be empty for player two', () => {
    const players = ['exampleName',''];
    expect(Game.validatePlayersNames(players).message).toEqual("Name(s) cannot be empty");
  });

  test('return error msg stating names cannot be empty for both players', () => {
    const players = ['',''];
    expect(Game.validatePlayersNames(players).message).toEqual("Name(s) cannot be empty");
  });

  test('return error if player names are not unique', () => {
    const players = ['exampleName','exampleName'];
    expect(Game.validatePlayersNames(players).message).toEqual("Names are not unique");
  });

  test('return a successful message then proceed to game play', () => {
    const players = ['exampleNameI','exampleNameII'];
    expect(Game.validatePlayersNames(players).message).toEqual("OK");
  });
});

describe('Validation checks for cell selection counter', () => {
  test('increments the number of cells selected', () => {
    Game.incrementCellsSelected();
    expect(Game.getNumberCellsSelected()).toBe(1);
  });
});

describe('Validation checks for check winner', () => {
  const player1WinCombination = [1, 1, 1, 2, 2, , , , ];

  test('returns the id of player one when it is having a winning combination', () => {
    expect(Game.checkWinner(player1WinCombination)).toEqual(1);
  });

  const player2WinCombination = [1, 1, ,2, 2, 2, , , ];

  test('returns the id of player one when it is having a winning combination', () => {
    expect(Game.checkWinner(player2WinCombination)).toEqual(2);
  });

  const tieCombination = [1, 1, 2, 2, 2, 1, 1, 1, 2];

  test('returns the id of player one when it is having a winning combination', () => {
    expect(Game.checkWinner(tieCombination)).toBeNull();
  });
})
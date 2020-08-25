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
});
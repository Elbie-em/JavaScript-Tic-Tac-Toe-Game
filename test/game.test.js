import * as Game from '../src/modules/game';

it('returns an empty array if the user names are not empty and are not equal', () => {
  const usersNames = { player1Name: 'player1', player2Name: 'player2' };

  expect(Game.checkPlayersNames(usersNames).messages).toEqual([]);
});

it('returns message indicating that the user names must be unique', () => {
  const usersNames = { player1Name: 'player1', player2Name: 'player1' };

  expect(Game.checkPlayersNames(usersNames).messages[0].msg).toBe('Names must be unique');
});

it('returns message indicating that player1 name must be valid', () => {
  const usersNames = { player1Name: '', player2Name: 'player1' };

  expect(Game.checkPlayersNames(usersNames).messages[0].msg).toBe('Please, enter valid name for player1');
});

it('returns message indicating that player2 name must be valid', () => {
  const usersNames = { player1Name: 'player1', player2Name: '' };

  expect(Game.checkPlayersNames(usersNames).messages[0].msg).toBe('Please, enter valid name for player2');
});

it('returns message indicating that player1 and player2 names must be valid', () => {
  const usersNames = { player1Name: '', player2Name: '' };

  expect([Game.checkPlayersNames(usersNames).messages[0].msg,Game.checkPlayersNames(usersNames).messages[1].msg]).toEqual(["Please, enter valid name for player1", "Please, enter valid name for player2"]);
});
import { isUnique, areNotEmpty } from '../src/modules/array-functions';

describe('Validation checks for isUnique', () => {

  test('returns true if the values in the array are unique', () => {
    const unique = ['player1', 'player2'];

    expect(isUnique(unique)).toBe(true);
  });

  test('returns a false if the values in the array are not unique', () => {
    const unique = ['player1', 'player1'];

    expect(isUnique(unique)).toBe(false);
  });

});

describe('Validation checks for areNotEmpty', () => {

  test('returns true if none of the values are empty strings', () => {
    const unique = ['player1', 'player2'];

    expect(areNotEmpty(unique)).toBe(true);
  });

  test('returns a false if any of the values is an empty string', () => {
    const unique = ['', 'player1'];

    expect(areNotEmpty(unique)).toBe(false);
  });
});
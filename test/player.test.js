import Player from '../src/modules/player';

test('creating a user instance for player X', () => {
    const playerOne = Player(1,'testPlayer','X');
    expect(playerOne).toEqual({id:1,name:'testPlayer',symbol:'X'})
    expect(playerOne).not.toEqual({id:7,name:'testPlayer',symbol:'B'});
});

test('creating a user instance for player O', () => {
    const playerOne = Player(2,'testPlayer','O');
    expect(playerOne).toEqual({id:2,name:'testPlayer',symbol:'O'})
    expect(playerOne).not.toEqual({id:10,name:'testPlayer',symbol:'Y'});
});
let gameBoard = ['X','O','X','O','X','O','X','O','X'];

const printBoard = () => {
  for(let i = 0; i < gameBoard.length; i++){
    let cell = document.getElementById(`pos${i}`);
    cell.innerHTML = gameBoard[i];
  }
}

const init = () => {

}

const render = () => {
  printBoard();
}

window.onload = () => {
  render();
}
let playerX = 'X';
let playerO = 'O';

// Winning combos
let winGame = [
  [[0][0], [0][1], [0][2]],
  [[1][0], [1][1], [1][2]],
  [[2][0], [2][1], [2][2]],
  [[0][0], [1][0], [2][0]],
  [[0][1], [1][1], [2][1]],
  [[0][2], [1][2], [2][2]],
  [[0][0], [1][1], [2][2]],
  [[1][2], [1][1], [2][0]],
];

// Starting game board
const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// PLAN OF ACTION

// let player choose their piece (tack or toe)
// computer auto pick the remaining piece

// player choice changes gameBoard

// computer random choice
// computer choice to change array

//choice corrolate to change on gameBoard
// event listener player click

// add who won
// tick crawls over winning pattern
// alert pop up to reset game

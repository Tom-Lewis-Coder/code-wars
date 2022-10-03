/*
DESCRIPTION:
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
DATA STRUCTURESALGORITHMS
*/

const validSolution = board => {
  let addRow = board.every(arr => arr.reduce((acc, cv) => acc + cv) == 45)

  let addCol = [board.map((n, i) => n[0]),
    board.map((n, i) => n[1]),
    board.map((n, i) => n[2]),
    board.map((n, i) => n[3]),
    board.map((n, i) => n[4]),
    board.map((n, i) => n[5]),
    board.map((n, i) => n[6]),
    board.map((n, i) => n[7]),
    board.map((n, i) => n[8])
  ].every(arr => arr.reduce((acc, cv) => acc + cv) == 45)

  let addBy3Square1 = [board[0], board[1], board[2]]
  let addBy3Square2 = [board[3], board[4], board[5]]
  let addBy3Square3 = [board[6], board[7], board[8]]

  let by3Square = [addBy3Square1.map((n, i) => n[0]).reduce((acc, cv) => acc + cv) +
    addBy3Square1.map((n, i) => n[1]).reduce((acc, cv) => acc + cv) +
    addBy3Square1.map((n, i) => n[2]).reduce((acc, cv) => acc + cv)
  ] == 45 && [addBy3Square2.map((n, i) => n[3]).reduce((acc, cv) => acc + cv) +
    addBy3Square2.map((n, i) => n[4]).reduce((acc, cv) => acc + cv) +
    addBy3Square2.map((n, i) => n[5]).reduce((acc, cv) => acc + cv)
  ] == 45 && [addBy3Square3.map((n, i) => n[6]).reduce((acc, cv) => acc + cv) +
    addBy3Square3.map((n, i) => n[7]).reduce((acc, cv) => acc + cv) +
    addBy3Square3.map((n, i) => n[8]).reduce((acc, cv) => acc + cv)
  ] == 45

  return addRow && addCol && by3Square == true
}
/*
Write a function that doubles every second integer in a list, starting from the left.

Example:

doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]
*/

const doubleEveryOther = a => {
  return a.map((n, i) => i % 2 === 1 ? n * 2 : n)
}
/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

const factorial = n => {
  return [...Array(n).keys()].map(n => n+1).reduce((a, b) => a * b, 1)
}
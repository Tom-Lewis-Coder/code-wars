/*
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return -1 if the argument is not valid
Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

maxRedigit(123); // returns 321
*/

const maxRedigit = num => {
  let highestNum = Number(num.toString().split('').sort().reverse().join(''))
  return num <= 99 || num > 999 ? null : highestNum 
}
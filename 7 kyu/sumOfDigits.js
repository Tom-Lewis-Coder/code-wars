/*
It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

Digits can be a number or a string, and you should control it is no undefined and return an empty string.
Digits can be a number or a string, and you should ensure it is not None and return an empty string.
To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.
*/

const sum = digits => {
  if (digits) { 
    let sum = digits.toString()
                    .split('')
                    .filter(num => num >= 0)
                    .join(' + ')
    let result = digits.toString()
                       .split('')
                       .map(el => Number(el))
                       .filter(num => num >= 0)
                       .reduce((acc,val) => acc + val)
    return sum.concat(' = ', result)
  } else {
    return (digits == '0') ? '0 = 0' : ''
  }
} 
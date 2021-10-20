/*
An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. 
Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.
*/

const zeroPlentiful = arr => {
  if (!arr.length) return 0
  let strArr = arr.join('').match(/(.)\1*/g).filter(str => str[0] == 0)
  return strArr.every(str => str.length >= 4) ? strArr.length : 0
}
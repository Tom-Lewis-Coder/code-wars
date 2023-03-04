/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

const testit = arr => {
  let highLow = [Math.max(...arr), Math.min(...arr)]
  let newArr = arr.filter(n => !highLow.includes(n))
  return Number((newArr.reduce((a, v) => a + v, 0) / newArr.length).toFixed(2)) || 0
}
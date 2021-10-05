/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

const high = x => {
let alpha = ' abcdefghijklmnopqrstuvwxyz'
let numArr = x.split(' ')
              .map(el => el.split(''))
              .map(el => el.map(el => alpha.indexOf(el)))
              .map(el => el.reduce((acc,cv) => acc+cv))
              
let indexOfHighest = numArr.indexOf(Math.max(...numArr))
return x.split(' ')[indexOfHighest]
}
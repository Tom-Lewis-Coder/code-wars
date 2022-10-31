/*
DESCRIPTION:
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

REGULAR EXPRESSIONSSTRINGS
*/

const incrementString = strng => {
  let zeros = strng.match(/\d+$/) == null ? -1 : strng.match(/\d+$/)[0].length - (Number(strng.match(/\d+$/)) + 1 + '').length
  return zeros != -1 ? strng.replace(/\d+$/, '') + Array(zeros).fill('0').join('') + (Number(strng.match(/\d+$/)) + 1) :
    strng.replace(/\d+$/, '') + (Number(strng.match(/\d+$/)) + 1)
}
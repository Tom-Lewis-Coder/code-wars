/*
DESCRIPTION:
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

STRINGSFUNDAMENTALS
*/

const changer = str => {
  let alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZA'
  let vowels = 'aeiouAEIOU'
  return str
    .split('')
    .map(l => alph.includes(l) ? alph[alph.indexOf(l) + 1] : l)
    .map(l => vowels.includes(l) ? l.toUpperCase() : l.toLowerCase()).join('')
}
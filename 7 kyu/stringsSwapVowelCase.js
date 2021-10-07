/*
Special thanks to SteffenVogel_79 for the idea.

Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.
*/

const swapVowelCase = str => {
  return str.split('')
            .map(el => el === "a" || el === "e" || el === "i" || el === "o" || el === "u" ? el.toUpperCase() :
            el === "A" || el === "E" || el === "I" || el === "O" || el === "U" ? el.toLowerCase() : el)
            .join('')
}

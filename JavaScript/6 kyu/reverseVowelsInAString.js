/*
DESCRIPTION:
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!

STRINGSFUNDAMENTALS
*/

const reverseVowels = str => {
  let vowRev = str.split('').filter(l => 'AEIOUaeiou'.includes(l)).reverse()
  let count = 0
  return str.split('').map(l => vowRev.includes(l) ? vowRev[count++] : l).join('')
}
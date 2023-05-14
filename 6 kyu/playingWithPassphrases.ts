/*
DESCRIPTION:
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase

STRINGSALGORITHMS
*/

export function playPass(s: string, n: number): string {
  let alph: string = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  let num: string = '1234567890'
  let numObj: any = { 9:0, 8:1, 7:2, 6:3, 5:4, 4:5, 3:6, 2:7, 1:8, 0:9 }
 return s.split('').map((el, i) => alph.includes(el.toLowerCase()) && i % 2 === 0 ?
      alph[alph.indexOf(el.toLowerCase()) + (n % 26)].toUpperCase() :
      alph.includes(el.toLowerCase()) ?
      alph[alph.indexOf(el.toLowerCase()) + (n % 26)] : num.includes(el) ?
      numObj[el] : el)
    .reverse().join('')
}
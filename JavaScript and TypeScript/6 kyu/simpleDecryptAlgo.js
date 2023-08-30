/*
DESCRIPTION:
You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:

(1) count the number occurences of each ascii lowercase letter, and

(2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

For example:

'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z
  
'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z
Remember, the string returned should always be 26 characters long, and only count lowercase letters.

Note: You can assume that each lowercase letter will appears a maximum of 9 times in the input string.
*/

const decrypt = encryption => {
  let count = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0,
    i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0,
    q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0,
    y: 0, z: 0
  }
encryption.replace(/[^a-z]+/g, '').split('').map(el => count[el] ++)
return Object.values(count).join('')
}
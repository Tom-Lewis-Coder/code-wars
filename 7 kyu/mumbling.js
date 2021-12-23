/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

const accum = s => {
  return s.split('')
          .map((s,i) => s = new Array(i+1).fill(s).join(''))
          .map(s => s[0].toUpperCase() + s.substring(1).toLowerCase())
          .join('-')
}
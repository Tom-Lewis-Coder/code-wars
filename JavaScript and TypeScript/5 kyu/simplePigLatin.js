/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = str => {
  return str.split(' ')
            .map(x => x.split('')
            .slice(1, x.length) + x[0] + 'ay')
            .map(w => w[0] != w.match(/[a-z]/i) ? w[0] : w)
            .map(w => w.replace(/,/g,''))
            .join(' ')
}
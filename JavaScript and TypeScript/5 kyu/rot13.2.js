/*
DESCRIPTION:
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
STRINGSCIPHERSREGULAR EXPRESSIONSALGORITHMS
*/

const rot13 = str => {
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let alphUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return str.split('').map(s => alph.includes(s) ?
      alph[(alph.indexOf(s) + 13) % 26] :
      alphUp.includes(s) ? alphUp[(alphUp.indexOf(s) + 13) % 26] : s).join('')
  }
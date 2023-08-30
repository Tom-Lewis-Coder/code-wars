/*
Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

const encryptor = (key, message) => {
  return message.length === 0 || key == 0 ? message :
    message.split('').map(el => el.match(/[A-Z]/) ? ((el.charCodeAt(0) - 64 + key) % 26) <= 0 ?
      ((26 - (26 - (el.charCodeAt(0) - 64 + key)) % 26) + 9).toString(36).toUpperCase() :
      (((el.charCodeAt(0) - 64 + key) % 26) + 9).toString(36).toUpperCase() :

      el.match(/[a-z]/) ? ((el.charCodeAt(0) - 96 + key) % 26) <= 0 ?
      ((26 - (26 - (el.charCodeAt(0) - 96 + key)) % 26) + 9).toString(36) :
      (((el.charCodeAt(0) - 96 + key) % 26) + 9).toString(36) : el)
    .join('')
}
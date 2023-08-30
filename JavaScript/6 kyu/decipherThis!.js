/*
DESCRIPTION:
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
STRINGSARRAYSCIPHERSFUNDAMENTALS
*/

const decipherThis = str => {
  return str.split(' ').map(string => {
    let firstLetter = String.fromCharCode(string.match(/\d+/))
    let tempVar = string.match(/\D+/) || [firstLetter]
    return string.replace(/\d+/, firstLetter).split('')
      .map((el, ind, arr) =>
        ind === 1 ? arr[arr.length - 1] :
        ind === arr.length - 1 ? tempVar[0][0] : el).join('')
  }).join(' ')
}
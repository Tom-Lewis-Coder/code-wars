/*
DESCRIPTION:
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
STRINGSALGORITHMS
*/

const formatWords = words => {
  if (words != null) {
    let wordsStr = words.filter(s => s.length)
    wordsStr.length <= 1 ? wordsStr.toString() : wordsStr.splice(wordsStr.length - 1, 0, 'and')
    return wordsStr.map((str, ind) => ind == wordsStr.length - 1 || ind == wordsStr.length - 2 || ind == wordsStr.length - 3 ? str + '' : str + ',').join(' ')
  } else {
    return ''
  }
}
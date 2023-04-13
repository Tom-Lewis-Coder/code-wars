/*
DESCRIPTION:
Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
FUNDAMENTALSSTRINGSALGORITHMS
*/

const remove = string => {
  return string.split(' ')
    .filter(s => !s.includes('!') ? s : s.split('').indexOf('!') === s.split('').lastIndexOf('!') ? '' : s)
    .join(' ')
}
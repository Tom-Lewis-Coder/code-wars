/*
DESCRIPTION:
Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
STRINGSALGORITHMSREGULAR EXPRESSIONSFUNDAMENTALS
*/ 

const removeParentheses = s => {
  let arr = []
  let count = 0
  s.split('').map((el, i) => el === '(' ? count++ : el === ')' ? count-- : count == 0 ? arr.push(i) : el)
  return arr.map(n => s[n]).join('')
}
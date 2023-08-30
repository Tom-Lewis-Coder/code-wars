/*
Given a string, swap the case for each of the letters.

Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235"
*/

const swap = str => {
  return str.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
}
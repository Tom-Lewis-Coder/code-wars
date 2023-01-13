/*
DESCRIPTION:
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
FUNDAMENTALSSTRINGSALGORITHMS
*/

function cleanString(s) {
  let revArr = s.split('').reverse()
  const rec = a => {
    a.splice(a.lastIndexOf('#'), 2)
  }
  while (revArr.includes('#')) {
    rec(revArr)
  }
  return revArr.reverse().join('')
}
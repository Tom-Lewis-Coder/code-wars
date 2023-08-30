/*
DESCRIPTION:
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
FUNDAMENTALSSTRINGSREGULAR EXPRESSIONS
*/

const kebabize = str => {
  let kebabed = str.split('').map(el => /\d/.test(el) ? '' : el === el.toUpperCase() ? '-' + el.toLowerCase() : el).join('')
  return kebabed[0] === '-' ? kebabed.slice(1) : kebabed
}
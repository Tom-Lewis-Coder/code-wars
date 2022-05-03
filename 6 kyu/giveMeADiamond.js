/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

const diamond = n => {
  if (n <= 0 || n % 2 === 0) return null
  let spaces = [...Array((n-1) / 2).fill(' ')]
  let arr1 = [...Array(n)].map((el,i) => [...Array(i+1).fill('*')]).filter(el => el.length % 2 != 0).map((el,i) => el.concat(spaces.slice(i)).reverse())
  let arr2 = [...arr1].reverse().slice(1).join('\n').replace(/,/g,'') + ('\n')
  return n === 1 ? arr1.join('\n').replace(/,/g,'') + ('\n') : arr1.join('\n').replace(/,/g,'') + ('\n') + arr2
}
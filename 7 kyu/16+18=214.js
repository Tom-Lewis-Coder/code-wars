/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
16 + 18 = 214
26 + 39 = 515
122 + 81 = 1103
*/

const add = (num1, num2) => {
  let res = []
  let n1 = num1.toString().split('').reverse() 
  let n2 = num2.toString().split('').reverse()
    for (let i = 0; i < Math.max(n1.length, n2.length); i++) {
      res.push((n1[i] || 0) + (n2[i] || 0))
    }
    return Number(res.map(n => Number(n[0])+ Number(n[1])).reverse().join(''))
}

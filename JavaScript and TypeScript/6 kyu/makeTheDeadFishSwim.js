/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

const parse = data => {
  let count = 0
  let result = []
  for (let i = 0; i < data.length; i++)
    data[i] === 'i' ? count++ :
    data[i] === 'd' ? count-- : 
    data[i] === 's' ? count = (Math.pow(count, 2)) : 
    data[i] === 'o' ? result.push(count) : count 
  return result
}
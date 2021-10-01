/*
Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4)  // 7
add(12)(20) // 32
*/

function add(a) {
  return function(b) {
    return a+b
  }
}
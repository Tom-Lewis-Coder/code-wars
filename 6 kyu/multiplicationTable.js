/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
  return [...Array(size).keys()]
                        .map(n => [...Array(size).keys()].map((_,i) => i + 1))
                        .map((arr, ind) => arr.map(n => n * [ind+1]))
}
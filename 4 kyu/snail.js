/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

snail = function(array) {
  let resultArr = []
  let midNum = array[Math.floor(array.length / 2)][Math.floor(array.length / 2)]

  const outerFunc = a => {
    let res = []
    let length = a.length
    let orderSeq = [...Array(length)].map((e, i) => i).concat([...Array(length - 2)].map((e, i) => i + 1).reverse())
    orderSeq.map((n, i) => n == 0 ?
      res.push(array[n].splice(0)) :
      i < (length - 1) ? res.push(array[n].splice(length - 1, 1)) :
      i === (length - 1) ? res.push(array[length - 1].splice(0).reverse(), ) :
      res.push(array[n].splice(0, 1))
    )
    return resultArr.push(res.flat())
  }

  while (array.filter(a => a.length).length > 1) {
    array = array.filter(a => a.length)
    outerFunc(array)
  }
  
  return array.length < 2 ? array.flat() : array.length % 2 == 0 ? resultArr.flat() : resultArr.flat().concat(midNum)
}
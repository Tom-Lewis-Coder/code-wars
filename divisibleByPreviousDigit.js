const divisibleByLast = n => {
  let numArr = n.toString().split('')
  let dividedNums = numArr.map((num, i, arr) => arr[i + 1] / num)
  let divResult = dividedNums.map(el => el === Math.floor(el) && el !== Infinity)
  return [false, ...divResult.slice(0, divResult.length-1)]  
}
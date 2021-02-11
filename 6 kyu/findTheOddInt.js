const findOdd = A => {
  let newObj = A.reduce((a,b) => (a[b] = ++a[b] || 1, a), {})
  let result = Object.keys(newObj).filter((num) => newObj[num] % 2)
  return parseInt(result[0])
}

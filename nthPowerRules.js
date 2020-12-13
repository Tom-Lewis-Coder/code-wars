const modifiedSum = (a, n) => {
  let sum = a.reduce((a,b) => a+b)
  let nPower = a.map((num) => Math.pow(num, n)).reduce((a,b) => a+b)
  return nPower - sum
}
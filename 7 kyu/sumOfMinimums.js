const sumOfMinimums = arr => {
  return arr.map(sub => Math.min(...sub)).reduce((a,b) => a+b)
}

const highAndLow = numbers => {
  let high = numbers.split(' ').sort((a,b) => a - b).pop()
  let low = numbers.split(' ').sort((a,b) => a - b).shift()
  return high.concat(' ',low)
}

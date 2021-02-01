const iqTest = numbers => {
  let odd = numbers.split(' ').filter(a => a % 2 === 1)
  if (odd.length === 1) {
    return numbers.split(' ').findIndex(i => i == odd) + 1
  } else {
    let even = numbers.split(' ').filter(a => a % 2 === 0)
    return numbers.split(' ').findIndex(i => i == even) + 1
  }
}
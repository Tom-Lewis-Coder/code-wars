const maxMultiple = (divisor, bound) => {
  let result = []
  for (let i = divisor + 1; i <= bound; i++) {
    if (i % divisor == 0 && i <= bound) {
      result.push(i)
    }
  }
  return Math.max(...result)
}

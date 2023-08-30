const sumEvenNumbers = input => {
  return input.filter((n) => n % 2 === 0).reduce((a,b) => a + b)
}

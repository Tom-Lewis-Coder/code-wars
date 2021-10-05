const squareDigits = num => {
  let result = num.toString().split('').map(a => a*a).join('')
  return Number(result)
  }

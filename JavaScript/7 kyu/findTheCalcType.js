const calcType = (a, b, res) => {
  return res === a / b ? "division" : res === a * b ? "multiplication" : res === a + b ? "addition" : "subtraction"
}

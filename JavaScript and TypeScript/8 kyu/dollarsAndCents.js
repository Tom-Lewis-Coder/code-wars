const formatMoney = amount => {
  let result = parseFloat(amount).toFixed(2)
  return `$${result}`
}

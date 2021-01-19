const evenNumbers = (array, number) => {
  let evenArr = array.filter(n => n % 2  == 0)
  return evenArr.slice(evenArr.length - number, evenArr.length)
}
const gimme = inputArray => {
  let newArr = [...inputArray].sort((a,b) => a - b)
  let val = newArr[1]
  return inputArray.indexOf(val)
};

const getCount = str => {
  let vowelsCount = 0;
  for (let v = 0; v <= str.length; v++) {
    if ((str[v] === 'a') || (str[v] === 'e') || (str[v] === 'i') || (str[v] === 'o') || (str[v] === 'u'))
      vowelsCount++
  }
  return vowelsCount;
}

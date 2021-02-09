const createArrayOfTiers = num => {
    let arr = []
    for (let i = 0; i < num.toString().length; i++) {
      arr.push(num.toString().slice(0,i+1))
    }
  return arr
}
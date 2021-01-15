const solve = arr => {  
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  return arr.map(x => x.toLowerCase().split('').filter((a,b) => b == alph.indexOf(a)).length)
}
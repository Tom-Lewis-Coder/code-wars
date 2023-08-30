const dbSort = a => {
  let numArr =  a.filter(a => typeof a !== 'string')
                 .sort((a,b) => a-b)
  let numStr = a.filter(a => typeof a === 'string' && !isNaN(a))
                 .sort()
  let strArr =  a.filter(a => isNaN(a) && a !== '!')
                 .sort()
  let exMark = a.filter(a => a === '!') 
  return [...numArr,...exMark, ...numStr, ...strArr]
}

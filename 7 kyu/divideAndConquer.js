const divCon = x => {
let nums = x.filter(a => typeof a !== 'string')
let strings = x.filter(a => typeof a === 'string')
  nums.length > 0 ? nums = nums.reduce((a,b) => a+b) : nums = 0
  strings.length > 0 ? strings = strings.map(a => parseInt(a)).reduce((a,b) => a+b) : strings = 0
  return nums - strings
}
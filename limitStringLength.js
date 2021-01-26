const solution = (string,limit) => {
  let add = '...'
  return string.length <= limit ? string : string.slice(0, limit).concat(add)
}
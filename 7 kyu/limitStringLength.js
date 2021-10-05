const solution = (string,limit) => {
  return string.length <= limit ? string : string.slice(0, limit).concat('...')
}

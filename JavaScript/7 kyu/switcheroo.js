const switcheroo = x => {
  return x.replace(/[ab]/g, el => (el === 'a' ? 'b' : 'a'))
}
const enough = (cap, on, wait) => {
  if (on + wait <= cap) {
    return 0
  } else {
    return ((0 - cap) + on + wait)
  }
}

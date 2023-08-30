const solve = stones => {
  let count = 0
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === stones[i+1]) {
      count++
      }
    }
  return count
}

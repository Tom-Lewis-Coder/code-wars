const sharePrice = (invested, changes) => {
  if (changes === 0) {
    return invested.toFixed(2)
  } else {
    return changes.reduce((a,b) => a * (b / 100) + a , invested)
      .toFixed(2)
    }
}

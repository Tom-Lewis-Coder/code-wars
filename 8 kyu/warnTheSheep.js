const warnTheSheep = queue => {
  let revQue = queue.reverse()
  if (revQue[0] == 'wolf') {
  return "Pls go away and stop eating my sheep"
    } else {
  let index = queue.findIndex((i) => i == 'wolf')
      return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
   }
  }

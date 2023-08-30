const vowelIndices = word => {
    let result = []
    for (let i = 0; i < word.length; i++) {
      if (/[aeiouy]/gi.test(word[i])) {
        result.push(i+1)
      }
     }
    return result 
   }
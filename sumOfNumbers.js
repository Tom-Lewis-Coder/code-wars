const getSum = ( a,b ) => {
  if (a === b) { return a;
    } else {
      let n = a
      let o = b
      let sum = 0
        if (a > b) { n = b; o = a
        }
        for (let i = n;i <= o; i++) {
          sum += i
        }
      return sum
    }
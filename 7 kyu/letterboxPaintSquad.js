const paintLetterboxes = (start, end) => {
    let arr = []
    for (let i = start; i <= end; i++) {
      arr.push(i)
    } 
    let zero = arr.join('').split('').filter(a => a === '0').length
    let one = arr.join('').split('').filter(a => a === '1').length
    let two = arr.join('').split('').filter(a => a === '2').length
    let three = arr.join('').split('').filter(a => a === '3').length
    let four = arr.join('').split('').filter(a => a === '4').length
    let five = arr.join('').split('').filter(a => a === '5').length
    let six = arr.join('').split('').filter(a => a === '6').length
    let seven = arr.join('').split('').filter(a => a === '7').length
    let eight = arr.join('').split('').filter(a => a === '8').length
    let nine = arr.join('').split('').filter(a => a === '9').length
    
    return [zero, one, two, three, four, five, six, seven, eight, nine]
  }

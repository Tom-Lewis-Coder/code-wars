const spoonerize = words => {
    let splitArr = words.split(' ')
    let slicedArr = splitArr.map(x => x.slice(1))
    let firstLetter = splitArr[0][0]
    let secLetter = splitArr[1][0]
    return [secLetter, slicedArr[0], ' ', firstLetter, slicedArr[1]].join('')
}
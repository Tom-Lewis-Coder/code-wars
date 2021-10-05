const uniqueNumbers = numbersArray => {
    return numbersArray.filter((a,b,c) => c.indexOf(a) === b)
}

const wordToBin = str => {
    return str.split('')
            .map(val => val.charCodeAt(0).toString(2))
            .map(val => ('0') + val)
}
const isIsogram = str => {
    return !/(.).*\1/.test(str.toLowerCase())
}
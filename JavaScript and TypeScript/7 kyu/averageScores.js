function average(scores) {
    return Math.round(scores.reduce((el, i) => el + i) / scores.length)
}
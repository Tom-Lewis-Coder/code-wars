const smallEnough = (a, limit) => {
    return a.filter(a => a > limit).length > 0 ? false : true
}
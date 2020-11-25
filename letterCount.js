let str = 'aeiouuuu'

const result = [...str].reduce((a, b) => { a[b] = (a[b] || 0) + 1 
    return a }, {})

console.log(result)
const equalize = array => {
    return array.map((a,b) => a - array[0]).map(x => x >= 0 ? "+"+x : ""+x)
    }

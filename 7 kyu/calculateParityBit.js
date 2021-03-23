const checkParity = (parity, bin) => {
    let count = bin.match(/1/g).length
    return parity === 'even' && count % 2 === 0 || parity === 'odd' && count % 2 === 1 ? 0 : 1
  }

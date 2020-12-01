const reverseSeq = n => {
  let revArr =  [];
  for (let i = n; i > 0; i--) {
    revArr.push(i)
  }
  return revArr
};
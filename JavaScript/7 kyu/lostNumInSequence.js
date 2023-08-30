const findDeletedNumber = (arr, mixArr) => {
  if (arr.length === mixArr.length) {
    return 0
  } else {
    let sorted = mixArr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != sorted[i]) 
        return i + 1
    }
  }
}

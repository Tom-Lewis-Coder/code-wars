function lifePathNumber(dateOfBirth) {
    let arr = dateOfBirth.split('-')
    let ymd = [arr[0]%9 || 9, arr[1]%9 || 9, arr[2]%9 || 9]
    let result = ymd.reduce((a,b) => a+b)%9||9
    return result
  }

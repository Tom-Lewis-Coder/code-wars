function abbrevName(name){
  let getInitials = name.split(" ")
  return (getInitials[0][0]+'.'+getInitials[1][0]).toUpperCase()
  }
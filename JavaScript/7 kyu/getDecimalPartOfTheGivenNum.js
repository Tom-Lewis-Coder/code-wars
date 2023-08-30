const getDecimal = n => {
   let num = Math.abs(n) 
   return num - Math.trunc(num)
} 

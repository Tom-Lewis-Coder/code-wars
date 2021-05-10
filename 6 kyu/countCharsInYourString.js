const count = string => {  
     return [...string].reduce((a,v) => { a[v] = a[v] ? a[v] + 1 : 1; return a}, {}) 
} 
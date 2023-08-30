/*
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/

const duplicateElements = (m, n) => {
  return m.map(el => n.includes(el)).filter(el => el === true).length > 0 ? true : false
}

/* should use some() for problems like this in future */
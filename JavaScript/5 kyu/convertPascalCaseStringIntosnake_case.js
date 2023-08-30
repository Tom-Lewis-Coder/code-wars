/*
DESCRIPTION

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
STRINGSALGORITHMS
*/

const toUnderscore = string => {
    return (string + '')
      .split('')
      .map(el => el === el.toUpperCase() && el != (string + '')[0] && el - el !== 0 ? '_' + el.toLowerCase() : el.toLowerCase())
      .join('')
  }
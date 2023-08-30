/*
DESCRIPTION:
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
STRINGSALGORITHMSDATE TIME
*/

const whatCentury = year => {
    let n = Math.ceil(year / 100)
    return n % 10 === 0 || n === 11 || n === 12 || n === 13 ? n + 'th' : n + ['st', 'nd', 'rd'][year.toString()[1]] || n + 'th'
  }
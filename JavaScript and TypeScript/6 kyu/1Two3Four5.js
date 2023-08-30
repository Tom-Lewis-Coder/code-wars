/*
You are given num (up to 15 digits, never less than 0).

If the length of num is even, return odd numbers as ints and even ones as strings, based on their position in the given number. Strings alternate in type cases: starting in lowercase to uppercase and so on based on position. If the length of num is odd, all the rules are opposite. See sample tests.

Note: Positions of numbers are 1-based.
*/

const conv = num => {
  let evenNumberStr = {
    0: 'zeroZERO',
    1: 'oneONE',
    2: 'twoTWO',
    3: 'threeTHREE',
    4: 'fourFOUR',
    5: 'fiveFIVE',
    6: 'sixSIX',
    7: 'sevenSEVEN',
    8: 'eightEIGHT',
    9: 'nineNINE'
  }
  let oddNumberStr = {
    0: 'ZEROzero',
    1: 'ONEone',
    2: 'TWOtwo',
    3: 'THREEthree',
    4: 'FOURfour',
    5: 'FIVEfive',
    6: 'SIXsix',
    7: 'SEVENseven',
    8: 'EIGHTeight',
    9: 'NINEnine'
  }

  return (num + '').length % 2 == 0 ?
    (num + '').split('').map((n, i) => n % 2 != 0 ? n : evenNumberStr[n].repeat(i + 1).substring(0, i + 1)).join('') :
    (num + '').split('').map((n, i) => n % 2 != 1 ? n : oddNumberStr[n].repeat(i + 1).substring(0, i + 1)).join('')
}
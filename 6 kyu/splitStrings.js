/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
REGULAR EXPRESSIONSSTRINGSALGORITHMS
*/

const solution = str => {
    return str.length ? str.length % 2 === 0 ? str.match(/.{1,2}/g) : (str + '_').match(/.{1,2}/g) : []
 }
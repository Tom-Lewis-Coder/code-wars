/*
DESCRIPTION:
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.

ARRAYSFUNDAMENTALS
*/

export function isHollow(x: number[]): boolean {
    let firstZeroInd = x.indexOf(0)
    let lastZeroInd = x.lastIndexOf(0) + 1
    let splicedZeros = x.splice(firstZeroInd, lastZeroInd - firstZeroInd)
    return splicedZeros.length > 2 &&
        splicedZeros.every(n => n == 0) &&
        x.length % 2 === 0 &&
        x.slice(0, firstZeroInd).length === x.slice(x.length / 2, x.length).length
}
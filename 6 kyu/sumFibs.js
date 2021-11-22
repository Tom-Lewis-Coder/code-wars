/*
Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.

Example:

sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the sequence and doesn't have another number in the sequence to get added to in the indexed Fibonacci sequence.
Example:

sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// 2 + 8 + 34 = 44;
*/

const sumFibs = n => {
    let fibSeq = [...Array(n+1)].fill(0).map((el,i,arr) => {
      if(i == 0){
        arr[i] = 0
      }else if(i == 1){
        arr[i] = 1
      }else{
        arr[i] = arr[i-2] + arr[i-1]
      }
      return arr[i]
    })
    return fibSeq.filter(n => n % 2 ==0).reduce((a,b) => a+b)
  }
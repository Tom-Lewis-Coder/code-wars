/*
The Padovan sequence is the sequence of integers P(n) defined by the initial values

P(0)=P(1)=P(2)=1

and the recurrence relation

P(n)=P(n-2)+P(n-3)

The first few values of P(n) are

1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, ...

Task
The task is to write a method that returns i-th Padovan number

> Padovan.Get(0) == 1

> Padovan.Get(1) == 1

> Padovan.Get(2) == 1

> Padovan.Get(n) == Padovan.Get(n-2) + Padovan.Get(n-3)
*/

const padovan = n => {
  return [...Array(n+1)].map((_,i,arr) => i <= 2 ? arr[i] = 1 : arr[i] = arr[i-2] + arr[i-3])[n]
}
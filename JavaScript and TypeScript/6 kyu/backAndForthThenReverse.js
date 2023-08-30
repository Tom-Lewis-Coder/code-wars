/*
DESCRIPTION:
Task
A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
Note
size of S goes up to 10^6
Keep the efficiency of your code in mind.
Do not mutate the Input.
ALGORITHMS DATA STRUCTURES PERFORMANCE ESOTERIC LANGUAGES FUNDAMENTALS
*/

const arrange = s => {
  let arr = []
  for (let i = 0; i < s.length / 2; i++)
    i % 2 == 0 ? arr.push(s[i]) && arr.push(s[(s.length - i) - 1]) :
    arr.push(s[(s.length - i) - 1]) && arr.push(s[i])
  return s.length % 2 == 0 ? arr : arr.slice(0, arr.length - 1)
}
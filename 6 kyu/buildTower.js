/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
Go challenge Build Tower Advanced once you have finished this :)
*/

const towerBuilder = nFloors => {
    function arrFill(num) {
        arr = []
        for(let i = 1; i <= num; i++){
            arr.push(i) 
        }
        return arr.map(x => '*')
    }
  let strLength = (nFloors * 2) - 1
  return Array.from(Array(nFloors).keys())
  				    .map((el,i) => el + (i+1))
              .map(num => arrFill(num).toString().replace(/[,]/g, ''))
              .map(s => s.padStart(s.length + Math.floor((strLength - s.length) / 2), ' ')
              .padEnd(strLength, ' '))
}

/*
Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

It has to return a string with the type of triangle.
For example:

typeOfTriangle(2,2,1) --> "Isosceles"
*/

const typeOfTriangle = (A, B, C) => {
    return (A + B) <= C || (B + C) <= A || (A + C) <= B ||
              isNaN(A) || isNaN(B) || isNaN(C) == true  ? 'Not a valid triangle' :
                  A == B && A == C ? 'Equilateral' : 
                    A == B || A == C || B == C ? 'Isosceles' : 'Scalene' 
}
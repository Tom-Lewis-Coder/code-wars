/*
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Solution
*/

const reverseLetter = str => str.split('').reverse().join('').replace(/[^a-zA-Z]/g, '');
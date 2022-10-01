/*
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

REGULAR EXPRESSIONSALGORITHMSSTRINGS
*/ 

const toCamelCase = str => {
  return str.split(/[^a-zA-Z]/).map((w, i) => i != 0 ? w[0].toUpperCase() + w.substring(1) : w).join('')
}
/*
DESCRIPTION:
Introduction
You need to write a function that will format a phone number by a template.

Task
You're given number and string.

If there are more digits than needed, they should be ignored

if there are less digits than needed, should return Invalid phone number

Examples
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
(8123706890, "+## ### ### ##-##") => "Invalid phone number"
(911, "###") => "911"
(112, "+ () -") => "+ () -"
Check 'Format phone number' series:
Format phone number by template

Format phone number - Mobile App

ALGORITHMS
*/

const formatNumber = (number, template) => {
  let arr = ('' + number).split('')
  let result = template.split('').map(el => el === "#" ? arr.shift() : el).join('')
  return result.length != template.length ? "Invalid phone number" : result
}
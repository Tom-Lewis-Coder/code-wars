/*
DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
STRINGSALGORITHMS
*/

const generateHashtag = str => {
    let tagged = '#' + str.trim().split(' ').map(s => s[0] != undefined ? s[0].toUpperCase() + s.substring(1) : '').join('')
    return str.trim().length < 1 || tagged.length > 140 ? false : tagged
  }


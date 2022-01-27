/*
You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
Return an empty string if there are no instances of letter in the given string.
*/

const comes_after = (str,l) => {
  return str.split('')
            .map((el, i) => el === l.toUpperCase() || el === l.toLowerCase() ? str[i+1] : '')
            .join('')
            .replace(/[^a-zA-Z]/g, '')       
}
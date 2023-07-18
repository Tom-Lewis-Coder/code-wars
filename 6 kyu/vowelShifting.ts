/*
DESCRIPTION:
You get a "text" and have to shift the vowels by "n" positions to the right.
(Negative value for n should shift to the left.)
"Position" means the vowel's position if taken as one item in a list of all vowels within the string.
A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Example:

text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

If text is null or empty return exactly this value.
Vowels are "a,e,i,o,u".


Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

STRINGSREGULAR EXPRESSIONSALGORITHMS
*/

export function vowelShift(text: string | null, n: number): string | null {
    if (text === null) {
        return text
    } else if (n >= 0) {
        let vowels: string[] = text.split('').filter((el: string) => 'aeiouAEIOU'.includes(el))
        vowels = vowels.slice(vowels.length - n % vowels.length, vowels.length).concat(vowels.slice(0, vowels.length - n % vowels.length))
        return text.split('').map((el: string) => 'aeiouAEIOU'.includes(el) ? vowels.splice(0, 1).toString() : el).join('')
    } else {
        let vowels: string[] = text.split('').filter((el: string) => 'aeiouAEIOU'.includes(el))
        vowels = vowels.slice(Math.abs(n % vowels.length), vowels.length).concat(vowels.slice(0, Math.abs(n % vowels.length)))
        return text.split('').map((el: string) => 'aeiouAEIOU'.includes(el) ? vowels.splice(0, 1).toString() : el).join('')
    }
}
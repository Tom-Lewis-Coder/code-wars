/* Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = text => {
  return text.split(' ')
             .map(s => s.length <= 1 ? s.charAt().charCodeAt() : 
                       s.length <= 2 ? s.charAt().charCodeAt() + s.charAt(1) :
                       s.charAt().charCodeAt() + s.charAt(s.length - 1) + s.substring(2, s.length - 1) + s.charAt(1))
             .join(' ')
}
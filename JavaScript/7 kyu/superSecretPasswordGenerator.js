/*
DESCRIPTION:
Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.

STRINGSFUNDAMENTALS
*/

const createSSP = password => {
  return password.split('')
                 .map(el => el.toLowerCase() === 'a' ? '@' : 
                            el.toLowerCase() === 's' ? '$' : 
                            el.toLowerCase() === 'o' ? '0' : 
                            el.toLowerCase() === 'h' ? '5' :
                            el.toLowerCase() === 'x' ? '*' : el).join('')
}
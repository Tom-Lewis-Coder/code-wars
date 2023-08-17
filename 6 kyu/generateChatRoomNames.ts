/*
DESCRIPTION:
You are writing a chat room app. Users have fed back that seeing everyone's full names on the screen creates too much noise, and have asked for it to be reduced. However, we still want to be able to uniquely identify everyone. The team have come up with a few rules that will hopefully help in solving this problem!

If only one person in the chat room has a specific first name, only their first name will be written out.

John Smith -> John

If two or more people have a specific first name, but don't share a second name initial, their first name and second name initial will be written out.

John Smith -> John S
John Adams -> John A

Finally, if two or more people have a specific first name and last name initial, their full name will be written out.

John Smith -> John Smith
John Simms -> John Simms

To help tidy up the output, management have also asked that the chat room list should be alphebetised, by the users screen names and should all be in Title Case.

JOHN smith -> John Smith
STRINGS
*/

export function generateChatRoomNames(users: string[]): string[] {
  let firstName: boolean[] = users.map(s => s.split(' ')[0]).map((s, _, arr) => arr.indexOf(s) === arr.lastIndexOf(s))
  let firstPlusInitial: boolean[] = users.map(s => s.split(' ')[0] + ' ' + s.split(' ')[1][0]).map((s, _, arr) => arr.indexOf(s) === arr.lastIndexOf(s))
  return users.map((s, i) => firstName[i] ? s.split(' ')[0][0].toUpperCase() + s.split(' ')[0].slice(1).toLowerCase() :
    firstPlusInitial[i] ? s.split(' ')[0] + ' ' + s.split(' ')[1][0].toUpperCase() :
      s).sort()
}
/*
DESCRIPTION:
Justin has an exceptionally smart dog. In the latest show of its unparalleled intelligence, the dog learned to communicate human words. To do that, it woofs the exact number of times it takes to get to the right letter in the English alphabet. For example, if the dog is interested in the letter "A", it woofs just one time, if it's "B", it woofs two times and so on. Justin is amazed by his pet, but he also finds it challenging to translate the woofs in his head. Write a decoder for him that takes a string of hyphen-separated woofs and returns their human-language representation

Things to keep in mind:

Each valid woof sequence stands for one letter. All of them are guaranteed to end with an exclamation point. A space, on the other hand, is not guaranteed to follow

Justin's audio recorder is not a very good one. Sometimes, it inserts some random sounds that should be ignored. With that in mind, a woof is any sequence of letters that has a "w", an "o", another "o", and an "f" – in that order but not necessarily consecutively and irrespective of the case. If a string has no valid woof sequences, the method should return "nothing to decode!"

Each woof subsequence can contain either zero or one woof (which, in turn, represents zero or one step in the alphabet traversing). For example, in a woof sequence "Woof-shhh-woofwoof!" there are three subsequences: "Woof", "shhh", and "woofwoof". The first one contains a woof, the second one doesn't, the third one also has a woof (not two). It means this woof sequence of two woofs in total stands for "b"

Albeit a smart one, Justin's dog is still a dog. Sometimes, it just wants to bark! If the number of woofs in any woof sequence exceeds the number of letters in the English alphabet, you should return "just barking!"

Justin's dog has not yet learned the concept of spaces. The strings may represent more than one human word, but the returned string should not contain any white space characters

While input strings may contain letters of either case, the returned strings should be always in lower case

Examples:

"Woof-woof-woof-woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof!" → "hi"

"Woof-woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof! Woof-woof-woof-woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof!" → "feedme"

"Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof!" → "just barking!"

"Shhhh!" → "nothing to decode!"

"WoofWoof!" → "a"

"Shhhhwoof!" → "a"

"Woofshhh! Shhh!" → "a"

"Wofowof!" → "a"

"khkhkhWbzzzzobzzzOghrrrrfseswsw!" → "a"

ALGORITHMSSTRINGS
*/

const woofDecoder = str => {
  let res = str.split('!')
    .map(w => w.split('-')
      .map(l => l.toLowerCase().match(/[wf]/gi) && l.match(/[o]/gi) ? l.match(/[o]/gi).length > 1 : '').filter(b => b === true).length)
    .map(n => n > 0 ? String.fromCharCode(n + 96) : '').join('')
  return res === '' ? 'nothing to decode!' : res.match(/[^a-z]/) ? 'just barking!' : res
}
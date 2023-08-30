/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

const humanReadable = seconds => {
  let res = seconds <= 59 ? `00:00:${seconds}` : 
  seconds <= 3599 ? `00:${Math.floor(seconds/60)}:${seconds - (Math.floor(seconds/60) * 60)}` : 
  `${Math.floor(seconds/3600)}:${Math.floor((seconds - (Math.floor(seconds/3600) * 3600)) / 60)}:${seconds - ((Math.floor(seconds/3600) * 3600) + Math.floor((seconds - (Math.floor(seconds/3600) * 3600)) / 60) *60)}`
  return res.split(':').map(x => x.length == 1 ? 0 + x : x = x).join(':')
}
/*
DESCRIPTION:
The Rhinestone Cowboy - Count the dollars in his boots!

You will receive an array of two strings with the Cowboys boots. Count the number of dollars in each boot and return a string such as: 

"This Rhinestone Cowboy has 2 dollar bills in his right boot and 1 in the left"
boots[0] = left boot boots[1] = right boot

```

The bill must be of form [(1)] to be counted and only count ones no other denominations. Only count bills in the top half of the boot(boot leg) so the cowboy can pull money out without removing the boots, see diagram above.

The test boots will be well-formed and always the same size.

You will always be given two boots since a Cowboy cannot walk around barefoot!

Dedicated to one of the coolest dudes ever.... Glen Campbell => https://www.youtube.com/watch?v=8kAU3B9Pi_U

ALGORITHMSASCII ART
*/

export function cowboysDollars(boots: string[]): string {
  const right: number = boots[0].split('|').filter(el => el === "[(1)]").length
  const left: number = boots[1].split('|').filter(el => el === "[(1)]").length
  return `This Rhinestone Cowboy has ${left} dollar bills in his right boot and ${right} in the left`
}
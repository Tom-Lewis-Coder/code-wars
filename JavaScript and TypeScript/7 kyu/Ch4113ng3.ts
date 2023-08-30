/*
DESCRIPTION:
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

STRINGSFUNDAMENTALS
*/

export function nerdify(txt: string): string {
  return txt.split('').map((s: string) => s === 'a' || s === 'A' ? 4 : s === 'e' || s === 'E' ? 3 : s === 'l' ? 1 : s).join('')
}
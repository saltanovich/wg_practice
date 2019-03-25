/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  // const result = strings.join(''); // may be too easy
  let result = '';
  for (const string of strings) {
    result += string;
  }
  return result;
}

/*
write a function's body that returns string
that contains element of initial strings with odd indexes

Example:
'abcd' -> 'ac'
'' -> ''
'test' -> 'ts'
*/
export function oddElements(string) {
  const result = string
    .split('')
    .filter((item, i) => i % 2 === 0)
    .join('');
  return result;
}

/*
write a function's body that returns words count in passed string

Example:
'abcd' -> 1
'' -> 0
'foo bar' -> 2

Note: String has .split(separator) method where seprator is another string
*/
export function wordsCount(string) {
  const result = string
    .split(' ')
    .filter(word => word !== '');
  return result.length;
}

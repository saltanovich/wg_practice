/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  const result = {};
  const letters = words.map(word => word.charAt(0));
  const uniqueLetters = letters.filter((item, i) => letters.indexOf(item) === i);
  uniqueLetters.forEach((item) => {
    result[item] = words
      .filter(word => item === word.charAt(0))
      .sort();
  });
  return result;
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  const result = {};
  keys.forEach((item) => {
    if (obj.hasOwnProperty(item)) {
      result[item] = obj[item];
    }
  });
  return result;
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  const result = {};
  const words = text
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, ''))
    .filter(word => word !== '');

  const uniqueWords = words.filter((word, i) => words.indexOf(word) === i);
  uniqueWords.forEach((word) => {
    const queryWords = words.filter(item => item === word);
    result[word] = queryWords.length;
  });

  return result;
}

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

export function createUser(login, password) {
  const user = {
    login,
    password,
  };
  user.isWeakPassword = function () {
    const lowerCasePassword = this.password.toLowerCase();
    if (this.password === lowerCasePassword) return true;
    const upperCasePassword = this.password.toUpperCase();
    if (this.password === upperCasePassword) return true;
    return false;
  }
  return user;
}

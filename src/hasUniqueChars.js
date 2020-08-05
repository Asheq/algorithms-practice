const _ = require('lodash');

const assert = require('assert');

// Solution with set
// Runtime: O(n)
// Space: O(n)
const hasUniqueCharsSet = (str) => {
  const seenChars = new Set();

  for (const char of str) {
    if (seenChars.has(char)) {
      return false;
    }

    seenChars.add(char);
  }

  return true;
}

// Soution without extra data structure
// Runtime: O(n^2)
// Space: O(1)
const hasUniqueCharsLoop = (str) => {

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

// Solution with string passed in as a character array
// Runtime: O(n * log(n))
// Space: O(1)

const hasUniqueCharsSort = (charArray) => {

  charArray.sort()

  for (let i = 1; i < charArray.length; i++) {
    if (charArray[i - 1] === charArray[i]) {
      return false
    }
  }

  return true;

}

assert(hasUniqueCharsSet('') === true)
assert(hasUniqueCharsSet('a') === true)
assert(hasUniqueCharsSet('abc') === true)
assert(hasUniqueCharsSet('abb') === false)

assert(hasUniqueCharsLoop('') === true)
assert(hasUniqueCharsLoop('a') === true)
assert(hasUniqueCharsLoop('abc') === true)
assert(hasUniqueCharsLoop('abb') === false)

assert(hasUniqueCharsSort([]) === true)
assert(hasUniqueCharsSort(['a']) === true)
assert(hasUniqueCharsSort(['a', 'b', 'c']) === true)
assert(hasUniqueCharsSort(['a', 'b', 'c']) === true)

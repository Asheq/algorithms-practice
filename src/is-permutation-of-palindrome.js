const assert = require('assert');

// Runtime: O(n)
// Space: O(n)
const isPermutationOfPalindrome = (str) => {
 const oddChars = new Set();

 for (const char of str) {
   if (char === ' ') {
     continue;
   }

   if (oddChars.has(char)) {
     oddChars.delete(char)
   } else {
     oddChars.add(char)
   }
 }

  return oddChars.size <= 1
}

assert(isPermutationOfPalindrome('') === true)
assert(isPermutationOfPalindrome('a') === true)
assert(isPermutationOfPalindrome('aaa') === true)
assert(isPermutationOfPalindrome('aab') === true)
assert(isPermutationOfPalindrome('baba') === true)
assert(isPermutationOfPalindrome('tact coa') === true)

console.log('All passed!')

function isAnyPermutationAPalindrome(str) {
    const oddCharSet = new Set();

    for (const char of str) {
        if (oddCharSet.has(char)) {
            oddCharSet.delete(char);
        } else {
            oddCharSet.add(char);
        }
    }

    return oddCharSet.size <= 1;
}

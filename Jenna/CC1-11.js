// 11. Longest Substring with At Most Two Distinct Characters

// input: string S
// output: length of longest subString with at most 2 distinct characters
// Time Complexity: brute force: n^3 (loop 3 times),
// Space Complexity: O(n),

function longestTwoDistinct(s) {
  let i = 0; // begining of string with at most two distinct characters
  let j = -1;
  let maxLen = 0
  for (let k = 1; k < s.length; k++) {
    if (s[k] == s[k - 1]) continue; // the same char, no rule breakings
    if (j >= 0 && s[j] !== s[k]) { // not the same char, j is loc of previous char and char at j is not the same as char at k
      maxLen = Math.max(k - i, maxLen);
      i = j + 1;
    }
    j = k - 1 // j is always the char before k
  }
  return Math.max(s.length - i, maxLen)
}

// test cases:
const S1 = 'eceba'
console.log(longestTwoDistinct(S1)) // expect 3: ece
const S2 = 'ecebaab'
console.log(longestTwoDistinct(S2)) // expect 4: baab

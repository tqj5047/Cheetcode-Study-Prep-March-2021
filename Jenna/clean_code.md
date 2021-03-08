## Index
[Array and String](#array-and-string)
[Linked List ](#linked-list)
# Array and String
## 1. Two Sum
Brute force with 2 loops: Time Complexity: O(n^2) , Space Complexity: O(1) space
Hash Table 1 pass: Time Complexity: O(n) runtime, Space Complexity: O(n) space
```Javascript
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let val = target - nums[i]
        if(nums[i] in map){
            return [i, map[nums[i]]]
        }
        map[val] = i
    }
    throw new Error('No two sum')
};
```
## 2. Two Sum II -sorted input array
Time Complexity: O(n)
Space Complexity: O(1)
```Javascript
var twoSum = function(numbers, target) {

    let pointer1 = 0
    let pointer2 = numbers.length - 1
    while(pointer2 > pointer1){
        if(numbers[pointer2] + numbers[pointer1] == target){
            return [pointer1 + 1, pointer2 + 1]
        } else if(numbers[pointer2] + numbers[pointer1] < target){
            pointer1++
        } else {
            pointer2--
        }
    }
    return -1
};
```
## 3. Two Sum III – Data structure design
```Javascript
Pending
```
## 4. Valid Palindrome
Time Complexity: O(n)
Space Complexity: O(1)
``` Javascript
var isPalindrome = function(s) {
    let a = [],
    b = s.toLowerCase().split("");
  for (let i = 0; i < b.length; i++) {
    let charCode = b[i].charCodeAt();
    if (
    charCode >= 48 && charCode <= 57 ||
     charCode>= 97 && charCode <= 122
    ) {
      a.push(b[i]);
    }
  }
  return [...a].reverse().join("") === a.join("")
};
```
## 5. Implement strstr()
Time Complexity: O(nm)  n = length of haystack and m = length of needle
Space Complexity: O(1)
```Javascript
var strStr = function(haystack, needle) {
    if(needle == ''){
        return 0
    }
    if(haystack.length < needle.length){
        return -1
    }
    let pointer1 = 0
    let pointer2 = needle.length
    while(pointer2 <= haystack.length){
        if(haystack.slice(pointer1, pointer2) == needle){
            return pointer1
        }
        pointer1++
        pointer2++
    }
    return -1
};
```
## 6. Reverse Words in a String
Time Complexity: O(n)
Space Complexity: O(n)
```Javascript
var reverseWords = function(s) {
    s = s.split(' ')
    let wordArr = []
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i]!=='')wordArr.push(s[i])
    }

    return wordArr.join(' ')
};
```
## 7. Reverse Words in a String II
Challenge 1: Without Split function
Time Complexity: O(n)
Space Complexity: O(n) if string mutable would be O(1)
Note: JS string is immutable, thus using array to mimic mutable string.
```Javascript
var reverseWords = function(s) {
    s = s.split('')
    reverse(s, 0, s.length)
    let i = 0;
    for( let j = 0; j <= s.length; j++){
        if(j == s.length|| s[j] == ' '){
            reverse(s, i, j)
            i = j + 1
        }
    }
    return s.join('')
};
var reverse = function(s, i, j){
    let start = i
    let end = j - 1
    while(start < end){
            let temp = s[start]
            s[start] = s[end]
            s[end] = temp
        start++
        end--
    }

}
```
## 8. String to Integer (atoi)
```Javascript
var myAtoi = function(s) {
    let result = 0
    let start = 0
    let sign = 1
    while(s[start] == ' '){
        start++
    }
    if(s[start] == '-' || s[start] == '+'){
        s[start] == '-' ? sign = -1 : 1
        start++
    }

    while(start < s.length){
        let cur = parseInt(s[start])
        if(isNaN(cur) )break
        result = result * 10 + cur
        start++
    }
    let max = Math.pow(2, 31) - 1
    let min = -1 * (max + 1)
    result = result * sign
    if(result <= max && result >= min){
            return result
    } else {
        if(result < min){
            return min
        }
        return max
    }

};
```
## 9. Valid Number
```Javascript
Pending
```
## 10. Longest Substring Without Repeating Characters
```Javascript
var lengthOfLongestSubstring = function(s) {
    if(s.length < 1){
        return s.length
    }
    let map = {}
    let longest = 0
    let start = 0
    let i = 0
    while(i < s.length){
        if(s[i] in map){
            longest = Math.max(longest, i - start)
            start = Math.max(map[s[i]] + 1, start)
        }
        map[s[i]] = i
        i++
    }
     longest = Math.max(longest, i - start)
    return longest
};
```
## 11. Longest Substring with At Most Two Distinct Characters
### see seperate doc for details
```Javascript
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
```
## 12. Missing Ranges
details see file
```Javascript
function missingRanges(int_arr) {
  let result = []
  const helper = (start, end) => {
    if (start == end) {
      result.push(start.toString())
    } else {
      let string = start.toString() + '=>' + end.toString()
      result.push(string)
    }
  }
  if (int_arr.length == 1) {
    if (int_arr[0] !== 0) {
      helper(0, int_arr[0] - 1)
    }
    if (int_arr[0] !== 99) {
      helper(int_arr[0] + 1, 99)
    }
    return result
  }
  for (let i = 0; i < int_arr.length; i++) {
    if (i == 0) {
      if (int_arr[i] !== 0) {
        helper(0, int_arr[i] - 1)
      }
      continue
    }
    if (int_arr[i] !== int_arr[i - 1] + 1) {
      helper(int_arr[i - 1] + 1, int_arr[i] - 1)
    }
    if (i == int_arr.length - 1 && int_arr[i] !== 99) {
      helper(int_arr[i] + 1, 99)
      break
    }
  }

  return result
}
```
## 13. Longest Palindromic Substring
```Javascript
var longestPalindrome = function(s) {
    if(s.length <= 1){
        return s
    }
    let pt1 = 0
    let longestsub = s[0]
    while(pt1 <= s.length - 1){
      let len1 =  expandLeftRight(s, pt1, pt1, 's[pt1]')
      let len2 = ''
          if(s[pt1] == s[pt1 + 1]){
            len2 = expandLeftRight(s, pt1, pt1 + 1, s.slice(pt1, pt1 + 2))
          }
        if(len1.length > longestsub.length){
            longestsub = len1
        }
        if(len2.length > longestsub.length){
            longestsub = len2
        }
        pt1++
    }
    return longestsub
};
var expandLeftRight = function(s, left, right, longest){
    if(left < 0 || right >= s.length){
        return longest
    }
    if(s[left] !== s[right]){
        return longest
    }
    return expandLeftRight(s, left - 1, right + 1, s.slice(left, right + 1))
}
```
## 14. One Edit Distance
```Javascript
Pending
```
## 15. Read N Characters Given Read4
```Javascript
Pending
```
## 16. Read N Characters Given Read4 – Call multiple times
```Javascript
Pending
```
# Linked List of
## 20. Merge Two Sorted Lists

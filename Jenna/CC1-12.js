//12. Missing Ranges
// input: array of integers, range [0, 99]
// output: array of strings indicating missing Ranges
// Time: O(n)
// Space: O(1)
// edge cases: empty array, array that have all range, array with over the range

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

//test case
const range1 = [3, 5, 7]
const range2 = [0]
const range3 = [1]
console.log(missingRanges(range1)) // [0=>2]
console.log(missingRanges(range2)) // []
console.log(missingRanges(range3)) // [0]

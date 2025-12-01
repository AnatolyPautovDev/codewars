// ❓ DESCRIPTION:
// Given a string and an array of indices, rearrange the characters of the string so that each character
// is placed at the position specified by the corresponding index in the array.

//   Example
// input: "abcd", [0, 3, 1, 2]
// output: "acdb"

// ✅ SOLUTION:

function scramble(str, arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = str[i]
  }
  return res.join('')
}
// ❓ DESCRIPTION:

//  write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
//   the string should start with a 1.

// ✅ SOLUTION:

function stringy(size) {
  let res = '1'
  for (let i = 1; i < size; i++) {
    res[res.length - 1] === '1' ? res += '0' : res += '1'
  }
  return res
}
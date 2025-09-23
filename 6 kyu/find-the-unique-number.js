// ❓ DESCRIPTION:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// ✅ SOLUTION:

function findUniq(arr) {
  const temp = arr.sort((a, b) => a - b)
  return temp[0] === temp[1] ? temp[temp.length-1] : temp[0]
}
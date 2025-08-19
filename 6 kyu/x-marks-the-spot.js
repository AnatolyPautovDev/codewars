// ❓ DESCRIPTION:

// Write a function that takes in a positive integer n and returns an n x n matrix with an X in the middle.
// The X will be represented by 1's and the rest will be 0's.

// ✅ SOLUTION:

function x(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([])
    for (let j = 0; j < n; j++) {
      i === j || i + j === n - 1 ? result[i][j] = 1 : result[i][j] = 0
    }
  }
  return result
}

console.log(x(5))
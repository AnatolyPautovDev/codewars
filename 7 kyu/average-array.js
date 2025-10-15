// ❓ DESCRIPTION:
// Create a function that takes a 2D array as an input, and outputs another array
// that contains the average values for the numbers in the nested arrays at the corresponding indexes.
//
//  Note: the function should also work with negative numbers and floats.

// ✅ SOLUTION:

function avgArray(arr) {
  const res = []
  for (let i = 0; i < arr[0].length; i++) {
    let temp = 0
    for (let j = 0; j < arr.length; j++) {
      temp += arr[j][i]
    }
    res.push(temp / arr.length)
  }
  return res
}

console.log(avgArray([ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]))
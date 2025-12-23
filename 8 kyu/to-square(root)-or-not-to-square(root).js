// ❓ DESCRIPTION:

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

// ✅ SOLUTION:

function squareOrSquareRoot(array) {
  return array.map(n => !(Math.sqrt(n) % 1) ? Math.sqrt(n) : Math.pow(n, 2))
}



// ❓ DESCRIPTION:

//   Given an array of integers.
//   Return an array, where the first element is the count of positives numbers
//   and the second element is sum of negative numbers. 0 is neither positive nor negative.
//   If the input is an empty array or is null, return an empty array.

// ✅ SOLUTION:

function countPositivesSumNegatives(input) {
  if (input === null || !input.length) return []
  const res = [0, 0]
  input.forEach(n => {
    n > 0 ? res[0] += 1 : res[1] += n
  })
  return res
}
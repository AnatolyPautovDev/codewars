// ❓ DESCRIPTION:

// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with the lowest index.
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// ✅ SOLUTION:

function removeSmallest(numbers) {
  const res = [...numbers]
  const index = numbers.findIndex(n => n === Math.min(...numbers))
  res.splice(index, 1)
  return res
}
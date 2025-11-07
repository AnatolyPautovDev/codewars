// ❓ DESCRIPTION:

//   Given two integers a and b, which can be positive or negative,
//   find the sum of all the integers between and including them and return it.
//   If the two numbers are equal return a or b.


// ✅ SOLUTION:

function getSum(a, b) {
  const nums = [a, b]
  nums.sort((a, b) => a - b )
  return ((nums[1] - nums[0]) + 1) * (nums[0] + nums[1]) / 2
}

console.log(getSum(10, 1))
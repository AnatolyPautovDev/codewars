// ❓ DESCRIPTION:

// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120.
// By convention the value of 0! is 1.

// ✅ SOLUTION:

function factorial(n) {
  if (n === 0) return 1
  if (n > 12) throw new RangeError()
  return  n === 1 ? 1 : n * factorial(n - 1)
}
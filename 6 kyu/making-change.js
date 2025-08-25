// ❓ DESCRIPTION:

// Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.
// Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively.
// They'll be represented by the symbols/strings H, Q, D, N and P.
// The argument passed in will be an integer representing the value in cents.
// The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values.
// Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

// ✅ SOLUTION:

const makeChange = (amount) => {
  const result = {}
  if (amount / 50 >= 1) {
    result['H'] = Math.floor(amount / 50)
    amount = amount % 50
  }
  if (amount / 25 >= 1) {
    result['Q'] = Math.floor(amount / 25)
    amount = amount % 25
  }
  if (amount / 10 >= 1) {
    result['D'] = Math.floor(amount / 10)
    amount = amount % 10
  }
  if (amount / 5 >= 1) {
    result['N'] = Math.floor(amount / 5)
    amount = amount % 5
  }
  if (amount) result['P'] = Math.floor(amount / 1)
  return result
};

console.log(makeChange(5))
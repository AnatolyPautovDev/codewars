// ❓ DESCRIPTION:
//   Digital root is the recursive sum of all the digits in a number.
//
//   Given n, take the sum of the digits of n.
//   If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
//   The input will be a non-negative integer.

// ✅ SOLUTION:
function digitalRoot(n) {
  let res = 0;
  n.toString().split('').forEach(n => res += +n)
  if (res.toString().length > 1){
    return digitalRoot(res)
  }
  return res
}

console.log(digitalRoot(132189))
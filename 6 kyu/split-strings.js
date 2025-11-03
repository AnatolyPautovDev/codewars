// ❓ DESCRIPTION:


// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace
// the missing second character of the final pair with an underscore ('_').

// ✅ SOLUTION:

function solution(str){
  if (!str) return []
  const res = str.match(/.{1,2}/g)
  res[res.length-1] = res[res.length-1].padEnd(2, '_')
  return res
}

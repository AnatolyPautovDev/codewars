// ❓ DESCRIPTION:

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// ✅ SOLUTION:

function past(h, m, s){
  const seconds = s + (m * 60) + (h * 3600)
  return seconds * 1000
}
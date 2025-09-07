// ❓ DESCRIPTION:

//   Write a function that will return the count of distinct case-insensitive alphabetic characters and
//   numeric digits that occur more than once in the input string.
//   The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// ✅ SOLUTION:
function duplicateCount(text){
  const res = {}
  for (let i = 0; i < text.length; i++) {
    res[text[i].toLowerCase()] ? res[text[i].toLowerCase()]++ : res[text[i].toLowerCase()] = 1
  }
  return Object.values(res).filter(n => n > 1).length
}

console.log(duplicateCount('fgggr'))
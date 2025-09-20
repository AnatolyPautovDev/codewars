// ❓ DESCRIPTION:

//   The goal of this exercise is to convert a string to a new string where each
//   character in the new string is "(" if that character appears only once in the
//   original string, or ")" if that character appears more than once in the original string.
//   Ignore capitalization when determining if a character is a duplicate.


// ✅ SOLUTION:

function duplicateEncode(word){
  let res = '';
  for (const w of word.toLowerCase()) {
    if (word.toLowerCase().split('').filter(e => e === w).length === 1) res += '('
    else res += ')'
  }
  return res;
}

console.log(duplicateEncode('CodeWarrior'))
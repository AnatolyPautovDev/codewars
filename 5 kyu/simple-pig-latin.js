// ❓ DESCRIPTION:

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
//   Leave punctuation marks untouched.

// ✅ SOLUTION:

function pigIt(str){
  return  str.split(' ').map(el => el.match(/[a-z]/i) ? el.slice(1) + el[0] + 'ay' : el).join(' ')
}

console.log(pigIt('O tempora o mores !'))

// ❓ DESCRIPTION:

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// ✅ SOLUTION:

function getCount(str) {
    let result = 0;
    const letters = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; i++){
      if (letters.includes(str[i])){
        result++
      }
    }
    return result;
}
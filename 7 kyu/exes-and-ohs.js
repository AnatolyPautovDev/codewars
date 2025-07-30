// ❓ DESCRIPTION:

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// ✅ SOLUTION:

function XO(str) {
    return str.split('').filter(x => x.toLowerCase() === 'x').length === str.split('').filter(o => o.toLowerCase() === 'o').length
}
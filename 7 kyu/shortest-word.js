// ❓ DESCRIPTION:

//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

// ✅ SOLUTION:

function findShort(s){
    const words = s.split(' ');
    let result = 10;
    for (let i = 0; i < words.length; i++) {
        result = result > words[i].length ? words[i].length : result;
    }
    return result;
}
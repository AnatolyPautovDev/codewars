// ❓ DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// ✅ SOLUTION:

function solution(str){
    result = '';
    for (let i = str.length-1; i >= 0; i--){
        result += str[i]   
    }
    return result;
}
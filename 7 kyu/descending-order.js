// ❓ DESCRIPTION:

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


// ✅ SOLUTION:

function descendingOrder(n){
    const result = String(n).split('')
    result.sort((a, b) => b - a)
    return +result.join('');
}


console.log(descendingOrder(1021));


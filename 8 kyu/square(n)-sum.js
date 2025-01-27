// ❓ DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// ✅ SOLUTION:

function squareSum(numbers){
    let sum = 0;
    for (const num of numbers) {
        sum += num ** 2;
    }
    return sum;
}
// ❓ DESCRIPTION:

// Please write a function that sums a list, but ignores any duplicated items in the list.
// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// ✅ SOLUTION:

function sumNoDuplicates(numList){
    let result = 0;
    numList.forEach(num => {
        if(numList.filter(x => x === num).length === 1){
            result += num
        }
    });
    return result
}
// ❓ DESCRIPTION:

// Write an algorithm that takes an array and moves all of the zeros to the end,
//   preserving the order of the other elements.

// ✅ SOLUTION:

function moveZeros(arr) {
  return arr.sort((a, b)=> {
    if (a === 0 && b !== 0) return 1
    if (b === 0 && a !== 0) return -1
    else return 0
  })
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
// ❓ DESCRIPTION:
// You have to write a function which creates the following pattern (See Examples) upto desired number of rows.
// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

//   Examples:
// Argument: 9
//
// 123456789
// 234567891
// 345678912
// 456789123
// 567891234
// 678912345
// 789123456
// 891234567
// 912345678

// ✅ SOLUTION:

function pattern(n) {
  let res = []
  const temp = []
  for (let i = 1; i <= n; i++) {
    temp.push(i)
  }
  res.push([...temp])
  while (res.length < n) {
    const t = temp.shift()
    temp.push(t)
    res.push([...temp])
  }

  res = res.map((arr) => {
    let str = ''
    arr.forEach(n => str +=n )

    return str
  })

  return res.join('\n');
}

console.log(pattern(5))
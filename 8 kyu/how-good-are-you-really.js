// ❓ DESCRIPTION:

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!


// ✅ SOLUTION:

function betterThanAverage(classPoints, yourPoints) {
  const average = (classPoints.reduce((acc, b) => acc + b, yourPoints)) / (classPoints.length + 1)
  return yourPoints > average
}
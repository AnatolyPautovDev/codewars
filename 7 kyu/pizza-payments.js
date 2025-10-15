// ❓ DESCRIPTION:
// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:
//
// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

// ✅ SOLUTION:

function michaelPays(costs) {
  if (costs < 5) return Math.round(costs * 100) / 100
  if (costs / 3 < 10) return Math.round((costs / 3 * 2) * 100) / 100
  return Math.round((costs - 10) * 100) / 100;
}

console.log(michaelPays(34))
console.log(34 / 3)
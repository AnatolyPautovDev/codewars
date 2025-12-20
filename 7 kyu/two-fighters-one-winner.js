// ❓ DESCRIPTION:

// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// ✅ SOLUTION:

function declareWinner(fighter1, fighter2, firstAttacker) {
  let [first,  second] = fighter1.name === firstAttacker ? [fighter1, fighter2] : [fighter2, fighter1]
  while (true) {
    let message = `${first.name} attacks ${second.name};`
    second.health -= first.damagePerAttack
    if (second.health <= 0) {
      message += ` ${second.name} has ${second.health} health is dead. ${first.name} wins.`
      console.log(message)
      return first.name
    }
    message += ` ${second.name} now has ${second.health} health.`
    console.log(message);
    [first, second] = [second, first]
  }
}
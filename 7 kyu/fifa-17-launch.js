// ❓ DESCRIPTION:


// ✅ SOLUTION:
function fifa(ticket, results){
  let win = 0;
  for (let i = 0; i < results.length; i++) {
    switch (i){
      case 0:
        results[i].split('-')[0] > results[i].split('-')[1] ? win += +ticket.Home.slice(1) : ''
        break
      case 1:
        results[i].split('-')[0] < results[i].split('-')[1] ? win += +ticket.Away.slice(1) : ''
        break
      case 2:
        results[i].split('-')[0] === results[i].split('-')[1] ? win += +ticket.Draw.slice(1) : ''
        break
    }
  }
  return `£${win}`;
}

console.log(fifa(
  {'Home':'£75', 'Away':'£5000', 'Draw':'£1324'},
  ['1-0', '2-3', '0-1']))
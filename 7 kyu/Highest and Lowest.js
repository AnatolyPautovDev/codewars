// ❓ DESCRIPTION:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// ✅ SOLUTION:

function highAndLow(numbers){
    numbers = numbers.split(' ');
    for(let i = 0; i < numbers.length; i++){
      numbers[i] = +numbers[i];
    }
    let max = numbers[0];
    let min = numbers[0];
    for(let i = 1; i < numbers.length; i++){
      if (numbers[i] < min){
        min = numbers[i];
      }
      if (numbers[i] > max){
        max = numbers[i];
      } 
    }
    return `${max} ${min}`
  }

// ❓ DESCRIPTION:

// This time no story, no theory. The examples below show you how to write function accum:

// // An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// ✅ SOLUTION:

function isIsogram(str){
    for (let i = 0; i < str.length; i++) {
          const el = str[i].toLowerCase();
          for(let j = i+1; j < str.length; j++){
              if (str[j].toLowerCase() === el) return false; 
          }   
      }
      return true;
}
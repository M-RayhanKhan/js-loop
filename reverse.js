var sentence = "I am learning web dev";
let rev = '';
//  for(const letter of sentence){
//     reverse = letter + reverse;
//  }
//  console.log(reverse);
const reverse = sentence.split('').reverse().join('');
console.log(reverse);
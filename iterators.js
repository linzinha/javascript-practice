const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  if (fruit[0] === 'a'){
    console.log('I want to eat an ' + fruit)
  } else {
  console.log('I want to eat a ' + fruit)
  }
});


const words = ['Any', 'sword', 'lakes', 'between', 'wiccan', 'ssayers', 'absconded'];
let n = -1;
// Create the secretMessage array below
const secretM = words.map(word => {
  n += 1
  return word[n];
})

console.log(secretM.join(''));

//using forEach
//
///////////////////////////////////////////////////
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  if (fruit[0] === 'a'){
    console.log('I want to eat an ' + fruit)
  } else {
  console.log('I want to eat a ' + fruit)
  }
});


//using map
//
///////////////////////////////////////////////////
const words = ['Any', 'sword', 'lakes', 'between', 'wiccan', 'ssayers', 'absconded'];
let n = -1;
// Create the secretMessage array below
const secretM = words.map(word => {
  n += 1
  return word[n];
})

console.log(secretM.join(''));



//using filter
//
///////////////////////////////////////////////////
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene', 'effervescent', 'embiggen'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  if (word[0] === 'e') {
    return word.length > 7;
  }
})

console.log(longFavoriteWords);

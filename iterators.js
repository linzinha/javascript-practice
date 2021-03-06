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

//using findIndex
//
///////////////////////////////////////////////////
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const startsWith = letter => animals.findIndex(animal => {
  return animal[0] === letter;
})

const findTheAnimal = (startsWith, letter) => {
  position = startsWith(letter)
  return 'an animal that starts with the letter ' + letter + ' is in position ' + startsWith(letter) + ' of the list: ' + letter + ' for ' + animals[startsWith(letter)] + '!'
}

console.log(findTheAnimal(startsWith,'s'))


//using reduce
//
///////////////////////////////////////////////////
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10);

console.log(newSum)



//using some, filter, every
//
///////////////////////////////////////////////////
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it


console.log(interestingWords.every((word) => {words.filter(word => word.length > 5) } ));

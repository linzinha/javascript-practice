let cat = {
  ears: 'perked',
  eyes: 'wide',
  status: 'is Hungry',
  whiskers: 'floofed',
  bugsEaten: 6,
  isHappy () {
    console.log('Mew! Purrrrrrrr')
  },
  isHungry () {
    console.log('MEOW MEOW MEOWMEOWMEOW MEOOOOOWWWWW')
  },
  isAngry () {
    console.log('HISSS')
  }
};


let feedCat = cat => {
  console.log("Feeding feline. Cat seems satisfied with food selection - this time.");
  cat.status = 'is Happy';
}

let doesvomit = () => {
  yesNo = Math.round(Math.random());
  if (yesNo === 0) {
    return "And it's your lucky day, because Cat doesn't immediate vomit it up on the one thing on the floor that is difficult to clean"
  } else {
    return "New status update. Stomach distress. Cat has thrown up lunch on that one piece of important paper that accidentally fell on the floor."
  }
}


console.log("Assessing cat status. Cat " + cat.status + ".");
cat.isHungry()
feedCat(cat);
console.log("Confirming status update. Cat " + cat.status) + ".";
cat.isHappy()
console.log(doesvomit())
OW MEOWMEOWMEOW MEOOOOOWWWWW')
  },
  isAngry () {
    console.log('HISSS')
  }
};

cat.isHappy()
cat.isHungry()
cat.isAngry()

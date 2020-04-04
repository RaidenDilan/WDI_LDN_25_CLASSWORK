console.log('JS loaded!');

const monkey = {
  name: 'George',
  species: 'Orangutan',
  foodsEaten: [],
  eatSomething(food) {
    this.foodsEaten.push(food);
  },
  introduce() {
    return `This is ${this.name}, and the class starts on ${this.start}, and I've eaten ${this.fEaten}`;
  }
};

monkey.eatSomething('spare tyre');

// const die = {
//   value: 1,
//   numberOfSides: 6,
//   roll() {
//     this.value = Math.ceil(Math.random() * this.numberOfSides);
//   }
// };
//
// for(operator === '') {
//
// }
// console.log(die.value);


// - Create a `monkey` object, which has the following properties:

//   - `name (String)`
//   - `species (String)`
//   - `foodsEaten (Array)`

//   And the following methods:

//   - `eatSomething(thingAsString)` which adds a new item into the monkey's `foodsEaten` array.
//   - `introduce`: returns a string introducing itself, including its name, species, and what it's eaten.

// - Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

// - Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and bracket notation).


// const a = 10;
// const b = 20;
//
// if(a > 10) {
//   console.log('Whoo!');
// } else if(a < 10) {
//   console.log('Boo!');
// } else {
//   console.log('Meh');
// }
//
// switch(true) {
//   case a === 10:
//   case a > 10:
//   case b > 10:
//     console.log('Whoo!');
//     break;
//   case a < 10:
//     console.log('Boo!');
//     break;
//   default:
//     console.log('Meh');
// }

// var again = true;
// while(again) {
//   again = confirm('Shall we go again?');
// }
//
// for(let i = 0; i<5; i++) {
//   alert('Hi Buki!');
// }
//
// let i = 0;
// while(i<5) {
//   alert('Hi Olivia!');
//   i++;
// }
//

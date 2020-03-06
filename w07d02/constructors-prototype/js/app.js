// const arr = [];
// const arr2 = new Array(); //contrctor fuction - it has the NEW work

// constructor
function Monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
}

// the eatSomethinginherits from the prototype from the money constructor
Monkey.prototype.eatSomething = function(food) {
  this.foodsEaten.push(food);
  console.log('food', food);
};

Monkey.prototype.primate = true;

// instances
const spider = new Monkey('James', 'spider');
const cheeky = new Monkey('Amanda', 'cheeky');
const flirty = new Monkey('Shongi', 'ape');

console.log(spider, cheeky, flirty);

// ```Using Google to help you, solve the following problems:

// > ** Note: ** When using Google, remember to add the language you are using.
// "How do I turn a string in to an array" is not as good as "How do I turn a string into an array with javascript"!


// 1. Turn a string into an array of words, using `String.split`:
// - Hi there, my name is Mike => ['Hi', 'there', 'my', 'name', 'is', 'Mike']
console.log('Turn a String into an Array --->', 'Hi there my name is Mike'.split(' '));


// 2. Join two arrays of strings using `Array.concat`.
// - ['Mike', 'Emily'] ['Will', 'Ajay'] => ['Mike', 'Emily', 'Will', 'Ajay']
var array1 = ['Mike', 'Emily'];
var array2 = ['Will', 'Ajay'];
var array3 = array1.concat(array2) || [].concat(array1, array2) || [...array1, ...array2];
console.log('Join two arrays --->', array3);

// 3. Take an array of words and turn them into a string with pipes `|` between each word using `Array.join`.
// - ['cloud', 'house', 'mountain', 'field'] => "cloud|house|mountain|field"
var a = ['cloud', 'house', 'mountain', 'field'];
var b = a.join('|');
console.log('Convert Array of words into Strings --->', b);


// 4. Make a new array of the 2nd and 3rd elements of an array using `Array.slice`
// - ['hippo', 'giraffe', 'lion', 'hyena'] => ['giraffe', 'lion']
var animals = ['hippo', 'giraffe', 'lion', 'hyena'];
var newArray = animals.slice(1, 3);
console.log('Create a new Array by slicing 2nd and 3rd animal from original Arrays --->', newArray);


// 5. Find the index of the word "pizza" in the following array with `Array.indexOf`.
// - ['salad', 'burger', 'pizza', 'soup'] => 2
var foods = ['salad', 'burger', 'pizza', 'soup'];
var pizza = foods.indexOf('pizza');
console.log('Find index of Pizza --->', pizza);


// 6. Sum the contents on an array of numbers using `Array.reduce`.
// - [1,2,3] => 6
var sum = [1, 2, 3].reduce(function(sum, currentNumber) {
  return sum + currentNumber;
}, 0);

console.log('Sum(total) of an Array --->', sum);


// 7. Take an array of strings and turn it into an array of numbers indicating the length of each string using `Array.map`.
// - ['Los Angeles', 'New York', 'Huston'] => [11, 8, 6]
var old = ['Los Angeles', 'New York', 'Huston'];
var newer = old.map(function(x) {
  return (x.length);
});

console.log('Map Array of String into an Array of Numbers --->', newer);


// 8. Take an array of numbers and return only the ones that are divisible by 3.
// You will need `Array.filter` and the modulus `%` operator.
// - [1,2,3,4,5,6,7,8,9,10] => [3,6,9]
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = array.filter((someNum) => someNum % 3 === 0);
console.log('Return numbers from Array that is divisible by 3 --->', newArray);


// 9. Order an array of strings alphabetically with `Array.sort`.
// - ['Mohammed', 'Katheryn', 'Aaron', 'Amanda'] => ['Aaron', 'Amanda', 'Katheryn', 'Mohammed']
var sorted = ['Mohammed', 'Katheryn', 'Aaron', 'Amanda'].sort();
console.log('Sort Array of Strings alphabetically --->', sorted);


// 10. Turn an array of numbers into an array of strings using `Array.map` and `String(num)`
// - [5,10,15,20,25] => ['5','10','15','20','25']

// Examples:
var array = [5, 10, 15, 20, 25];
var mappedArray = array.map(String);
var newArray = array.map((x) => String(x));
console.log('Map an Array of Intigers into Array of Strings --->', mappedArray);
console.log('Map an Array of Intigers into Array of Strings --->', newArray);

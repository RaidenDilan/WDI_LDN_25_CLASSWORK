console.log('JS loaded!');

// // EPLICIT BINDING
// function foo() {
//   return this;
// }
//
// const objB = {name: 'objB'};
// const bar = foo.bind(objB);
//
// console.log(foo());
// console.log(bar());
//
// // 'this' always points to an object
//
// const obj = {
//   bar: function() {
//     return this;
//   }
// };
//
// obj.bar();
//
// //


const object = {
  func: function() {
    return this;
  }
};

const otherFunc = object.func; // function inside the object

console.log(otherFunc()); //return the window or this=the window


// 'use strit';
//
// function foo() {
//   return this;
// }
//
// console.log(foo.call(this)); //returns the window

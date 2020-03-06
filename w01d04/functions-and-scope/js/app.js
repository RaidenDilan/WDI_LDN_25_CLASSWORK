// You can see out of a scope but can't see inside of a scope.
var a = 1;
var b = 2;

console.log('Global scope ---> a', a);
console.log('Global scope ---> b', b);

function foo() {
  var a = 3;
  var b = 4;

  console.log('parent function scope ---> a', a);
  console.log('parent function scope ---> b', b);

  function bar() {
    var a = 5;

    console.log('child function scope ---> a', a);
    console.log('child function scope ---> b', b);
  }

  bar();
}

foo();

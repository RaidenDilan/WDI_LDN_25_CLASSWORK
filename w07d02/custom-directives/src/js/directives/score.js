angular
  .module('CardsAgainstAssembly')
  .directive('score', score);

function score() {
  const directive = {
    restrict: 'E', // takes a string as an arguement - YOU CAN PASS IN AN E(element), A(attribute), C(class), M(comment).
    replace: true, // replace a directive or insert something into the directive
    templateUrl: 'js/views/scoresView.html',
    scope: {
      name: '@', // @ means a STRING! and name is what we've defined in our cardsController.
      points: '@' // @ means a STRING! and points is what we've defined in our cardsController.
      // name: '=' // = means a OBJECT/MODEL!
      // points: '=' // = means a OBJECT/MODEL!
    },
    // scope: {
    //   ngModel: '=',     // Bind the ngModel to the object given
    //   onSend: '&',      // Pass a reference to the method
    //   fromName: '@'     // Store the string associated by fromName
    // },
    link(attr, element, scope) {}
  };
  return directive;
}

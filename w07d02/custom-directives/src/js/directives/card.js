angular
  .module('CardsAgainstAssembly')
  .directive('card', card);

function card() {
  const directive = {
    restrict: 'E', // takes a string as an arguement - YOU CAN PASS IN AN E(element), A(attribute), C(class), M(comment).
    replace: true, // replace a directive or insert something into the directive
    templateUrl: 'js/views/cardView.html',
    scope: {
      question: '@' // @ means a STRING! and question is what we've defined in our cardsController.
      // question: '=' // = means a OBJECT/MODEL!
    },
    // scope: {
    //   ngModel: '=',     // Bind the ngModel to the object given
    //   onSend: '&',      // Pass a reference to the method
    //   fromName: '@'     // Store the string associated by fromName
    // },
    link(attr, element, scope) {
      // console.log('card', scope);
    }
  };
  return directive;
}

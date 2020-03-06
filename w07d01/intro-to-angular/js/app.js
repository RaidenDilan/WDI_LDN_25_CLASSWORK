angular
  .module('introToAngular', []) // square bracket will contain any external...
  .controller('HomeCtrl', HomeCtrl);

// contructer function
function HomeCtrl() {
  const vm = this; // vm refers to THIS controller

  vm.message = 'Hey you guys!';
  
  // function HomeCtrl($scope) {
  //   $scope.message = 'Hey you guys!';
  // }
}

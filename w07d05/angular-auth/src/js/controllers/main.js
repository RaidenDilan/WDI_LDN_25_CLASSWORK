angular
  .module('birdApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth'];
function MainCtrl($rootScope, $state, $auth) {
  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated; // link our authentication to the auth.js

  vm.logout = logout;

  function logout() {
    $auth.logout(); // remove the token
    $state.go('login'); // send the user to the login state
    // $state.reload();
  }

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false; // make sure the state has not changed
    vm.message = err.data.message; //vm is the controller
    if(err.status === 401) $state.go('login'); // if the error status is 401 redirect to login page otherwise, to another page.
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null; // hide the message
    if(!vm.stateHasChanged) vm.stateHasChanged = true; // show the message
  });
}

// this will only happen when we get an error from our AJAX requrst

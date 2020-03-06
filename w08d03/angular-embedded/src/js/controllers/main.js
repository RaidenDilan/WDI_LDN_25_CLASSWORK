angular
  .module('instagramApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth'];
function MainCtrl($rootScope, $state, $auth) {
  const vm = this;
  vm.navIsOpen = false;

  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    $state.go('login');
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    if (vm.stateHasChanged) vm.message = null;
    if (!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.navIsOpen = false; // mobile

    if ($auth.getPayload()) vm.currentUserId = $auth.getPayload().userId; // this will return us the jwt token to grab data inside the jwt toke whenever we want.
  });

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;
}

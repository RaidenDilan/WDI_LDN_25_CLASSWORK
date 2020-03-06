angular.module('githubAuth')
  .config('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$authProvider'];
function LoginCtrl() {
  $authProvider.github({
    clientId: 'YOUR CLIENT_ID'
});

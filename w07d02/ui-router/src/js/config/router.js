angular
  .module('todoApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  // routes go here...
  $stateProvider
  // state - state of the page, show age or edit or index page
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('archive', {
      url: '/archive',
      templateUrl: '/js/views/archive.html'
    })
    .state('todosShow', {
      url: '/todos/:id',
      templateUrl: 'js/views/show.html'
    });

  $urlRouterProvider.otherwise('/');
}

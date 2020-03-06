angular
  .module('coffeeAssembly')
  .controller('CoffeeIndexCtrl', CoffeeIndexCtrl);

CoffeeIndexCtrl.$inject = ['Coffee', 'filterFilter', 'orderByFilter', '$scope'];
function CoffeeIndexCtrl(Coffee, filterFilter, orderByFilter, $scope) {
  const vm = this;

  vm.all = Coffee.query();

  function filterCoffee() {
    const params = { name: vm.querySearch };

    if(vm.useStrength) params.strength = vm.strength;
    if(vm.useRoast) params.roast = vm.roast;

    vm.filtered = filterFilter(vm.all, params);
    vm.filtered = orderByFilter(vm.filtered, vm.sort);
  }

  // Watch Group is watching out for all those array of functions.
  $scope.$watchGroup([
    () => vm.querySearch,
    () => vm.useStrength,
    () => vm.strength,
    () => vm.useRoast,
    () => vm.roast,
    () => vm.sort
  ], filterCoffee);

  vm.filterCoffee = filterCoffee;
}

angular
  .module('coffeeAssembly')
  .controller('CoffeeIndexCtrl', CoffeeIndexCtrl);

CoffeeIndexCtrl.$inject = ['Coffee', 'filterFilter', '$scope'];
function CoffeeIndexCtrl(Coffee, filterFilter, $scope) {
  const vm = this;
  vm.all = Coffee.query();

  function filterCoffee() {
    const params = { name: vm.q };

    if(vm.useStrength) params.strength = vm.strength;
    if(vm.useRoast) params.roast = vm.roast;

    vm.filtered = filterFilter(vm.all, params);
  }

  $scope.$watchGroup([
    () => vm.name,
    () => vm.strength,
    () => vm.useStrength,
    () => vm.roast,
    () => vm.useRoast
  ], filterCoffee);

  vm.filterCoffee = filterCoffee;
}
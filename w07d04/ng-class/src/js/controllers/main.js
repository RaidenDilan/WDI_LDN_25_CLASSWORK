angular
  .module('donutApp')
  .controller('MainCtrl', MainCtrl);

function MainCtrl() {
  const vm = this;

  vm.all = [];
  vm.donut = {
    flavor: '',
    size: '',
    eaten: false
  };

  vm.add = addDonut;

  function addDonut() {
    if(vm.donutForm.$valid) {
      vm.all.push(vm.donut);
      vm.donut = {
        flavor: '',
        size: '',
        eaten: false
      };
      vm.donutForm.$setPristine();
      vm.donutForm.$setUntouched();
    }
  }
}

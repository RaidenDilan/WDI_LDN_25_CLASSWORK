angular
  .module('donutApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];
function MainCtrl() {
  const vm = this;

  vm.all   = [];
  vm.donut = {};
  vm.add   = addDonut;

  function addDonut(){
    vm.all.push(vm.donut);
    vm.donut = {};
  }
}

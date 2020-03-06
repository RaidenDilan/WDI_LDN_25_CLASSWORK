angular
  .module('birdApp')
  .controller('BirdsIndexCtrl', BirdsIndexCtrl)
  .controller('BirdsShowCtrl', BirdsShowCtrl)
  .controller('BirdsNewCtrl', BirdsNewCtrl)
  .controller('BirdsEditCtrl', BirdsEditCtrl);

BirdsIndexCtrl.$inject = ['Bird'];
function BirdsIndexCtrl(Bird) {
  const vm = this;

  vm.all = Bird.query();
}

BirdsNewCtrl.$inject = ['Bird', '$state'];
function BirdsNewCtrl(Bird, $state) {
  const vm = this;
  vm.bird = {};

  function birdsCreate() {
    Bird
      .save(vm.bird)
      .$promise
      .then(() => $state.go('/birdsIndex'));
  }

  vm.create = birdsCreate;
}

BirdsShowCtrl.$inject = ['Bird', '$stateParams', '$state'];
function BirdsShowCtrl(Bird, $stateParams, $state ) {

  const vm = this;

  vm.bird = Bird.get($stateParams); // { id: '546abfhtfhf753h' }

  function birdsDelete() {
    vm.bird
      .$remove()
      .then(() => $state.go('birdsIndex'));
  }

  vm.delete = birdsDelete;
}

BirdsEditCtrl.$inject = ['Bird', '$stateParams', '$state'];
function BirdsEditCtrl(Bird, $stateParams, $state) {
  const vm = this;

  vm.bird = Bird.get($stateParams);

  function birdsUpdate() {
    vm.bird
      .$update()
      .then(() => $state.go('birdsShow', $stateParams));
  }

  vm.update = birdsUpdate;
}

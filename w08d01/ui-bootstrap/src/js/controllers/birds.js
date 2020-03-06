angular
  .module('birdApp')
  .controller('BirdsIndexCtrl', BirdsIndexCtrl)
  .controller('BirdsNewCtrl', BirdsNewCtrl)
  .controller('BirdsShowCtrl', BirdsShowCtrl)
  .controller('BirdsEditCtrl', BirdsEditCtrl)
  .controller('BirdsDeleteCtrl', BirdsDeleteCtrl);

BirdsIndexCtrl.$inject = ['Bird'];
function BirdsIndexCtrl(Bird) {
  const vm = this;

  vm.all = Bird.query();

  vm.myInterval = 2000;
  vm.noWrapSlides = true; // loop through
  vm.active = 0;
}

BirdsNewCtrl.$inject = ['Bird', '$state'];
function BirdsNewCtrl(Bird, $state) {
  const vm = this;
  vm.bird = {};

  vm.rate = 7;
  vm.max = 10;
  vm.isReadonly = false;

  vm.hoveringOver = function(value) {
    vm.overStar = value;
    vm.percent = 100 * (value / vm.max);
  };

  vm.ratingStates = [
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
  ];

  function birdsCreate() {
    Bird
      .save(vm.bird)
      .$promise
      .then(() => $state.go('birdsIndex'));
  }

  vm.create = birdsCreate;
}

BirdsShowCtrl.$inject = ['Bird', '$stateParams', '$state', '$uibModal'];
function BirdsShowCtrl(Bird, $stateParams, $state, $uibModal) {
  const vm = this;

  vm.bird = Bird.get($stateParams);

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/birdDeleteModal.html',
      controller: 'BirdsDeleteCtrl as birdsDelete',
      resolve: {
        currentBird: () => {
          return vm.bird; // passing in the bird object.
        }
      }
    });
  }

  vm.open = openModal;

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

BirdsDeleteCtrl.$inject = ['$uibModalInstance', 'currentBird', '$state'];
function BirdsDeleteCtrl($uibModalInstance, currentBird, $state) {
  const vm = this;

  vm.bird = currentBird;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function birdsDelete() {
    vm.bird
      .$remove()
      .then(() => {
        $state.go('birdsIndex');
        $uibModalInstance.close();
      });
  }

  vm.delete = birdsDelete;
}

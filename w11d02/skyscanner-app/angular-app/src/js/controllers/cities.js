angular
  .module('flightsApp')
  .controller('CitiesIndexCtrl', CitiesIndexCtrl)
  .controller('CitiesNewCtrl', CitiesNewCtrl)
  .controller('CitiesShowCtrl', CitiesShowCtrl);

CitiesIndexCtrl.$inject = ['City', 'skyscanner'];
function CitiesIndexCtrl(City, skyscanner) {
  const vm = this;

  vm.all = City.query();
  vm.flights = [];

  function getFlights() {
    skyscanner
      .getFlights('anywhere')
      .then((quotes) => vm.flights = quotes);
  }

  getFlights();
}

CitiesNewCtrl.$inject = ['City', '$state'];
function CitiesNewCtrl(City, $state) {
  const vm = this;
  vm.city = {};

  function citiesCreate() {
    City
      .save(vm.city)
      .$promise
      .then(() => $state.go('citiesIndex'));
  }

  vm.create = citiesCreate;
}

CitiesShowCtrl.$inject = ['City', '$stateParams', '$state', 'skyscanner'];
function CitiesShowCtrl(City, $stateParams, $state, skyscanner) {
  const vm = this;

  City
    .get($stateParams)
    .$promise
    .then((city) => {
      vm.city = city;
      getFlights();
    });

  vm.flights = [];

  function getFlights() {
    skyscanner
      .getFlights(vm.city.airport)
      .then((quotes) => vm.flights = quotes);
  }
}

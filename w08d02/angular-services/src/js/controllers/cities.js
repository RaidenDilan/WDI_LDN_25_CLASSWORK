angular
  .module('flightsApp')
  .controller('CitiesIndexCtrl', CitiesIndexCtrl)
  .controller('CitiesNewCtrl', CitiesNewCtrl)
  .controller('CitiesShowCtrl', CitiesShowCtrl);

CitiesIndexCtrl.$inject = ['City', 'skyscanner'];
function CitiesIndexCtrl(City, skyscanner) {
  const vm = this;

  vm.all = City.query(); // grabs all the cities from out seeds file.
  vm.flights = [];

  getFlights(); // get flights when the page loads

  function getFlights() {
    skyscanner.getFlights('anywhere') // pass in the string of 'anywhere' provided by skyscanner
    .then((flights) => {
      vm.flights = flights;
    });
  }
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

CitiesShowCtrl.$inject = ['City', '$stateParams', 'skyscanner'];
function CitiesShowCtrl(City, $stateParams, skyscanner) {
  const vm = this;

  City.get($stateParams, (city) => { //(city) only show the data once the .get request has come back.
    vm.city = city;
    getFlights(); //
  });

  vm.flights = [];


  function getFlights() {
    skyscanner.getFlights(vm.city.airport) // pass in our chosen city
    .then((flights) => {
      vm.flights = flights;
    });
  }
}

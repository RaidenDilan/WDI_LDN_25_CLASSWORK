angular
  .module('donutApp', [])
  .controller('DonutsCtrl', DonutsCtrl);

DonutsCtrl.$inject = ['$http']; // don't mess with minification
function DonutsCtrl($http) {
  const vm = this;
  vm.all = [];

  donutsIndex();

  // Angular version of AJAX
  function donutsIndex() {
    $http.get('http://localhost:3000/donuts')
      .then((response) => {
        vm.all = response.data; // render data(donuts) on to the page
      });
  }

  vm.newDonut = {}; // page starts out EMPTY

  vm.donutsCreate = donutsCreate;

  function donutsCreate() {
    $http.post('http://localhost:3000/donuts', vm.newDonut)
      .then((response) => {
        vm.all.push(response.data); // push out new data and update the data.
        vm.newDonut = {}; // EMPTYs the form
      });
  }

  vm.donutsDelete = donutsDelete; // attaching the donutsDelete to the the controller

  function donutsDelete(donut) {
    $http.delete(`http://localhost:3000/donuts/${donut.id}`) // grabs the donut id
      .then(() => {
        const index = vm.all.indexOf(donut);
        vm.all.splice(index, 1); // starts at index of 0 and looks for 1 donut in the array of donuts
      });
  }
}

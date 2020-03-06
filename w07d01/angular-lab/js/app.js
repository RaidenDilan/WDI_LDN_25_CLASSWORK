angular
  .module('donutsApp', [])
  .controller('DonutsCtrl', DonutsCtrl);

function DonutsCtrl() {
  const vm = this;
  vm.formVisible = false;
  vm.newItem = {};
  vm.items = [
    { 'style': 'Old Fashioned', 'flavor': 'Chocolate' },
    { 'style': 'Cake', 'flavor': 'Coconut' },
    { 'style': 'Yeast', 'flavor': 'Frosted' },
    { 'style': 'Glazed', 'flavor': 'Plain' },
    { 'style': 'Cruller', 'flavor': 'Plain' },
    { 'style': 'Cream', 'flavor': 'Boston Creme' },
    { 'style': 'Jelly', 'flavor': 'Raspberry' },
    { 'style': 'French Cruller', 'flavor': 'Strawberry' },
    { 'style': 'Fritter', 'flavor': 'Apple' }
  ];

  vm.addItem = addItem;

  function addItem() {
    vm.items.push(vm.newItem);
    vm.newItem = { style: '', flavor: '' };
    vm.formVisible = false;
  }

  function deleteItem() {
    
  }

  vm.showForm = showForm;

  function showForm() {
    vm.formVisible = true;
  }
}

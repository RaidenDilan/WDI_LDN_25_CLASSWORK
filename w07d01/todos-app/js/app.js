angular
  .module('todoApp', [])
  .controller('TodosCtrl', TodosCtrl);

function TodosCtrl() {
  const vm = this;
  vm.formVisible = false;
  vm.newItem = { done: false }; // empty object to store new tas

  vm.items   = [
    { task: 'washing', done: false },
    { task: 'cleaning', done: false },
    { task: 'homework', done: false },
    { task: 'sleep', done: false },
    { task: 'buy shoes', done: false }
  ];

  vm.addItem = addItem; // attach the addItem function to the TodosCtrl function

  function addItem() {
    // vm.items.push({ task: 'learn angular', done: false });

    vm.items.push(vm.newItem);
    vm.newItem = { task: '', done: false }; // empty the new array after a task has been added.
    vm.formVisible = false; // hide form input AFTER submit
  }

  vm.showForm = showForm; // attach the showForm function to the addItem function

  function showForm() {
    vm.formVisible = true; // show form input when todos button is clicked.
  }
}

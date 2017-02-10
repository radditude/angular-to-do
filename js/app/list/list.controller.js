function ListController() {
  var vm = this;

  vm.currentTask = {};

  vm.add = add;

  vm.list = {
    name: 'Todo List',
    tasks: [
      {
        id: 1,
        name: 'Take out trash',
        complete: false
      },
      {
        id: 2,
        name: 'Do dishes',
        complete: true
      },
      {
        id: 3,
        name: 'vaccuum',
        complete: false
      },
      {
        id: 4,
        name: 'dog nails',
        complete: false
      }
    ]
  }

  function add() {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
  }
}

angular
  .module('todoApp')
  .controller('ListController', ListController)

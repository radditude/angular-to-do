function ListController() {
  var vm = this;
  var selectedId = -1;
  var addFlag = false;
  var editFlag = false;
  var removeFlag = false;

  vm.currentTask = {};
  vm.startAdd = startAdd;
  vm.isInAddMode = isInAddMode;
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

  function reset() {
    selectedId = -1;
    addFlag = false;
    editFlag = false;
    removeFlag = false;
  }

  function startAdd() {
    reset();
    addFlag = true;
    vm.currentTask = {};
  }
  
  function isInAddMode() {
    return addFlag;
  }

  function add() {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
    reset();
  }
}

angular
  .module('todoApp')
  .controller('ListController', ListController)

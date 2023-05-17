var app = angular.module("ToDoApp", []);

app.controller("Ctrl", Ctrl);

function Ctrl() {
  this.todosArray = [];
  this.editMode = false;
  this.editButtonText = "Edit";

  this.addToDo = function () {
    this.todosArray.push(this.todoInput);
    this.todoInput = "";
  };

  this.delete = function (index) {
    this.todosArray.splice(index, 1);
  };

  this.changeMode = function () {
    this.editMode = !this.editMode;
    if (this.editButtonText === "Edit") {
      this.editButtonText = "Done";
    } else {
      this.editButtonText = "Edit";
    }
  };
}

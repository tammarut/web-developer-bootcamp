var todos = ["SLeep", "walk", "run", "Take a nap"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  //handle input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    //create delete as function
    deleteTodo();
  }

  //ask again for new input
  var input = prompt("What would you like to do?");
}
console.log("Ok, You quit the app");

function listTodos() {
  console.log("---------------");
  todos.forEach(function(value, i) {
    console.log(i, value);
  });
  console.log("---------------");
}

function addTodo() {
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
}

function deleteTodo() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  todos.splice(index, 1);
}

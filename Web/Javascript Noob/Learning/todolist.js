var todos = ["Learn French"] ;
var input = prompt("What would you would like to do?") ;

while(input !=="quit"){
	if (input==="list") {
		listTodos();
	} else if(input==="new"){
		addTodo();

	} else if (input==="delete") {
		deleteTodo();
	}
	var input = prompt("What would you would like to do?") ;
}
console.log("Ok, yo quit the app")


function listTodos(){
	console.log("**********") ;
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo) ;
	console.log("**********") ;
	});
}

function deleteTodo(){
	var index = prompt("What is the index of the item ?") ;
	todos.splice(index,1) ;
	console.log("Item deleted succesfull")
}

function addTodo(){
	var newtodo = prompt("Enter a new todo") ;
	todos.push(newtodo) ;
	console.log("Added a new item")
}
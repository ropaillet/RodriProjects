var listNumber = 1 ;

//all clickear en los forms, los checkeo (aplico checked class)
$("section").on("click","li",function(){
	$(this).toggleClass("checked");
});

//click on x to delete the current todo
$("section").on("click", ".deleteButt" ,function(event){
	$(this).parent().fadeOut(700,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//al hacer click en pencil, que oculte el titulo y muestre el input (toggle), hidee el +, el pencil de edit 
// y el header anterior.
$("section").on("click", ".fa-pencil" ,function(){
	var myClass = $(this).parent().parent().attr("class");
	$("." + myClass + " " + ".fa-pencil").toggle();
	$("." + myClass + " " + ".fa-plus").toggle();
	$("." + myClass + " " + ".editTodoInput").toggle();
	$("." + myClass + " " + ".editTodo").toggle();
});

//al completar el texto del input, reemplazar el texto del span por el del input y setear el input a blank
//vuelva a mostrar todo
$("section").on("keypress", ".editTodoInput" ,function(e){
	if (e.which===13){
	var myClass = $(this).parent().parent().attr("class");
	var newTitle = $(this).val();
	$(this).val("");
	$("." + myClass + " " + ".editTodo").text(newTitle) ;
	$("." + myClass + " " + ".fa-pencil").toggle();
	$("." + myClass + " " + ".fa-plus").toggle();
	$("." + myClass + " " + ".editTodoInput").toggle();
	$("." + myClass + " " + ".editTodo").toggle();
	}
});

// add new todo based on text input when they hit enter
$("section").on("keypress",".newInput",(function(e){
	if (e.which===13){
		var myClass = $(this).parent().attr("class");
		var toDotext = $(this).val();
		//reset the input form
		$("." + myClass + " " + ".newInput").val("");
		//add the new todo with append at the bottom of the list
		$("." + myClass + " " + "ul").append("<li><span class='deleteButt'><i class='fa fa-trash'></i></span>"+ " " + toDotext +"</li>");
	}
}));

//hides add new todo text input or shows it when the plus icon is clicked.
$("section").on("click",".fa-plus",function(){
	var myClass = $(this).parent().parent().attr("class");
	$("." + myClass + " " + "input").fadeToggle();
});

//adds a new list when the user clicks the app title.
$(".newList").on("click",function(){
	$("section").append("<div><h1 class='headerList1'><span class='editTodo'>TO-DO LIST</span><input type='''' name=''' class='editTodoInput'><i class='fa fa-pencil'></i><i class='fa fa-plus'></i></h1><input type='' name='input1' class='newInput' placeholder='Add a new Todo'><ul class='list1'></ul></div>");
	var listClass = "lista" + listNumber ;
	$("div:last-of-type").toggleClass(listClass);
	listNumber ++ ;
})





var listNumber = 1 ;

//checked todos when clicked
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

//on pencil click, show input to edit h1
$("section").on("dblclick", "h1" ,function(event){
	var myClass = $(this).parent().attr("class");
	$("." + myClass + " " + "input2").val("");

});

// add a listener to text input when they hit enter to add a new todo of that nature
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

$("section").on("click",".fa-plus",function(){
	var myClass = $(this).parent().parent().attr("class");
	$("." + myClass + " " + "input").fadeToggle();
});

$(".newList").on("click",function(){
	$("section").append("<div><h1 class='headerList1'>TO-DO LIST<i class='fa fa-plus'></i></h1><input name='input1' class='newInput' placeholder='Add a new Todo'><ul class='list1'><li class='item'><span class='deleteButt'><i class='fa fa-trash'></i></span> Visit Hagrid</li><li class='item'><span class='deleteButt'><i class=fa fa-trash'></i></span> Kiss Hermione</li><li class='item'><span class='deleteButt'><i class='fa fa-trash'></i></span> Hug Buckbeack</li><li class='item'><span class='deleteButt'><i class='fa fa-trash'></i></span> Pester Malfoy</li></ul></div>");
	var listClass = "lista" + listNumber ;
	$("div:last-of-type").toggleClass(listClass);
	listNumber ++ ;
})





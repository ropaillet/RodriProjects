//checked todos when clicked
$("ul").on("click","li",function(){
	$(this).toggleClass("checked");
});

//click on x to delete the current todo
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(700,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add a listener to text input when they hit enter to add a new todo of that nature
$(".newInput").keypress(function(e){
	if (e.which===13){
		//grab text from input
		var toDotext = $(this).val();
		//reset the input form
		$(this).val("");
		//add the new todo with append at the bottom of the list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ " " + toDotext +"</li>");
	}
});

$(".fa-plus").on("click",function(){
	$(".newInput").fadeToggle();
});



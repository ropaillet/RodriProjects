$(".butt1").on("keypress",function(e){
	if(e.which == 13){
	alert("you clicked p");
	}
});

x=11
while(x>2){
	x -= 1;
	console.log(x)
}

$(".butt1").on("click",function(){
	if ( $("#third").css("background-color") == "rgb(255, 0, 0)" ) {
	$("#third").css("background-color","blue");
	}else{
	$("#third").css("background-color","red");
	}
});

//numero +=2 ( equales numero = numero + 2);
//numero -=2 (para substraerle al valor);
var trys = 3
var color = "";

while(trys > 0){
	color = prompt("what is your favourite color");
	if (color == "verde") {
	 alert("Welcome abroad") ;
	 break
	}
	else if( trys ==1 && color !== "verde")  {
	 alert("You entered the password wrong 3 times, see you in 15 mins");
	 break	
	}
	else if ( color !== "verde") {
	 trys -- ;
	 alert("INCORRECT, PLEASE TRY AGAIN")
	}
};









var currentDay = prompt("Please enter the current day of the Week").toLowerCase() ;
var inputTrys = 7 ;

while (currentDay !== "exit" && inputTrys >0 ){
	var daysofweek = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'] ;
	var dayChecker = daysofweek.indexOf(currentDay);
	if ( !isNaN(currentDay)){
		alert("Please don t enter numbers...") ;
	}
	if (dayChecker >= 0) {
		gothroughdays();	
	} 
	if (isNaN(currentDay) && dayChecker <0){
		alert("Please enter a real week day");
		inputTrys -- ;
	}
	var currentDay = prompt("Please enter the current day of the Week").toLowerCase() ;
}
alert("Too many tries.. go back to school");

function gothroughdays(){
	if (dayChecker <5){
		alert("Es un dia habil");
		inputTrys = 7;
	} else {
		alert("Es fin de Semana") ;
		inputTrys = 7;
	}		
}





















///var userAge = Number(prompt("What is Your Age ?"));

//var daysAlive = userAge * 365
//var hoursAlive = daysAlive * 24

//alert("You have been alive for roughly " + daysAlive + " days and " + hoursAlive + " hours.")

///
///if (userAge < 0) {
///	console.log("Your age is incorrect, please enter again");
///} else if (userAge === 22) {
///	console.log("Happy Birthday");
///} else if (userAge < 3 || userAge > 110 ) {
///	console.log("Wow... that is indeed and odd age");
///} else if ( Math.sqrt(userAge) % 1 == 0 ) {
///	console.log("YOUR AGE IS A PERFECT SQUARE, JACKPOOOT");
///} 


/// secret number game

///var secretNumb = 5
//var guessNumb = Number(prompt("Guess a Number")) ;

//if (secretNumb === guessNumb) {
//	alert("Congratulations, you guessed the number, it was " + secretNumb) ;
//}else if ( (secretNumb - guessNumb) > 0 ) {
//	alert("Too Low") ;
//}else if ((secretNumb - guessNumb) < 0){
//	alert("Too High") ;
//}


var numb = Number(-10) 

console.log("Print all numbers between -10 and 19") ;

while (numb <20 ) {
	console.log(numb);
	numb ++;
}

var numb2 = Number(10)

console.log("Print all even numbers between 10 and 40");

while (numb2<41){			
	console.log(numb2) ;
	numb2 = numb2 + 2 ;
}

var numb3 = Number(301)

console.log("Print all odd numbers between 300 and 333");

while (numb3<334){			
	console.log(numb3) ;
	numb3 = numb3 + 2 ;
}

var numb4 = Number(5)

console.log("Print all odd numbers divisible by 3 and 5 between 5 and 50");

while (numb4<51){	
	if ( numb4 % 3 === 0 && numb4 % 5 === 0 ) {
	console.log(numb4) ;
	}	
	numb4 +=1;
}

	

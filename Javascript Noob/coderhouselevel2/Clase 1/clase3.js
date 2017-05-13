var numero1 = Number(prompt("Enter the first number"),1);
var typeOp = prompt("Please enter the desired operation","+-*/")
var numero2 = Number(prompt("Enter the second number"),2);

while(isNaN(numero1)|| isNaN(numero2) || !isOp(typeOp)){
	if(isNaN(numero1)){
		var numero1 = Number(prompt("Enter a correct first number"),1);
	}if (!isOp(typeOp)) {
		var typeOp = prompt("Please enter the desired operation","+-*/")
	}if(isNaN(numero2)){
		var numero2 = Number(prompt("Please enter a correct second number"),1);
	}
}

function isOp(typeOp){
	if (typeOp == ("+")||typeOp == ("-")|| typeOp == ("*")||typeOp == ("/")){
	return true;	
	}else{
	return false;
	}	
}

var producta = function calculate(a,b,c){
	if(c == "*"){
		result = a * b ;
	}
	if(c == "/"){
		result = a / b ;
	}
	if(c == "+"){
		result = a + b ;
	}
	if(c == "-"){
		result = a - b ;
	}
	return result ;
}
alert(producta(numero1,numero2,typeOp));
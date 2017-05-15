//calculadora

//var numero1 = Number(prompt("Gimmie a numberrr ",2));
//var numero2 = Number(prompt("Gimmie another numberrr ",2));

//alert("The sum of both is " + (numero1 + numero2) );
//alert("The substracion of both is " + (numero1 - numero2)) ;
//alert("The product of both is " + (numero1 * numero2)) ;
//alert("The division of both is " + (numero1 / numero2)) ;

var name = prompt("Please enter the master user ","Pepe");
var lastname = prompt("Please enter the lastname","Blayer");

if (name=="Juan") {
	name ="Pepe" ;
}

var	attemptsCounter = 0




while(name!=="Pepe" || lastname!=="Blayer"){
	alert("Incorrect user, please try again...cheater") ;
	var name = prompt("What is your name ","Pepe");
		if (name=="Juan") {
		name="Pepe"
	}
	var lastname = prompt("Please enter the lastname","Blayer");
}
alert("Welcome, Pepe") ;

// MISMO EJEMPLO CON SWITCH

var name = prompt("Please enter the master user ","Pepe");
var lastname = prompt("Please enter the lastname","Blayer");
var nameComb = (name + " " + lastname).toLowerCase();
console.log(nameComb);

switch (nameComb){
	case "pepe blayer":
		alert("Bienvenido Pepe") ;
		break
	case "juan blayer":
		alert("Bienvenido Pepe") ;
		break
	default:
		alert("Incorrecto, intenta de nuevo")
}



// this explains how a switch works, comparing values

var numerodias = Number(prompt("Please enter the current day of the week in number ","Pepe"));

switch (numerodias){
	case 1:
		alert("Lunes")
		break
	case 2:
		alert("Martes")
		break
	case 3:
		alert("Miercoles")
		break
	case 4:
		alert("Jueves")
		break
	case 5:
		alert("Viernes")
		break
	case 6:
		alert("Sabado")
		break
	case 7:
		alert("Domingo")
		break
		//si dejo un break sin llenar, automaticamente ejecuta el de abajooo
	case 8:
	case 9:
		alert("No existen estos dias")
	default:
		alert("Incorrect input, please try again with workdays between 1-7")
}
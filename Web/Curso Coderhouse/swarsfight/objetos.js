//constructor de objetos
function constructorPersonas(nombre,apellido,nacionalidad,edad,sexo,esProfesor,criminal,
	altura,idiomas){
	this.nombre = nombre;
	this.apellido = apellido;
	this.nacionalidad = nacionalidad;
	this.edad = edad;
	this.sexo = sexo;
	this.esProfesor = esProfesor;
	this.criminal = criminal;
	this.altura = altura;
	this.idiomas = idiomas;
	this.saludar = function(saludo){console.log("The dark side greets you, stranger")};
	this.correr = function(nombre){console.log(nombre + "runs. ")};
	this.comer = function(nombre){console.log(nombre + "eats.")};
}

//ejemplo persona
var persona ={
	nombre:"Darth",
	apellido:"Vader",
	nacionalidad:"Imperio",
	edad: 50,
	sexo:"Masculino",
	esProfesor:true,
	criminal:true,
	altura: 1.84,
	idiomas:['Espaniol','Portugues','Frances','Ingles'],
	saludar: function(saludo){console.log("The dark side greets you, stranger")},
	correr: function(nombre){console.log(nombre + "runs. ")},
	comer: function(nombre){console.log(nombre + "eats.")},
}
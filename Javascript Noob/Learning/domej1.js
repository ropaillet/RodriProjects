

console.log("connected")



//select the body
var isBlue = false;

setInterval(function(){
	if (isBlue) {
		document.body.style.backgroundColor = "white";
	}else{
		document.body.style.backgroundColor = "#3498db";
	}
	isBlue = !isBlue;
}
,1000)


// selector methods in the dom 

// getElementById : busca esa id y devuelve el tipo de elemento, devuelve el objeto, para acceder a todo lo
// que lo compone hay que hacer console.dir()

document.getElementById("highlight")

// getElementsByClassName 
// takes a string argument and returns a list of elements that have that same class something lik an array

var allOf = getElementsByClassName("bolder")

//getElementByTagName, example all li or all uls

var tags = document.getElementsByTagName("li");
console.log(tags[0]);

//querySelector : reemplaza a todo lo anteriooor

//devuelve el primer elemento que matchea con el selector css equivalente, es el mas usado de todos 
// es una funcionalidad nueva de css

var tags = document.querySelector("head")

//document.querySelectorAll()  : devuelve todos los elementos correspodnientes a ese selector CSS

var tags = document.querySelectorAll("li")



var tags = document.querySelector("#first") ;
var tags2 = document.querySelector(".special") ;
var tags3 = document.querySelector("p") ;
var tags4 = document.querySelectorAll("p")[0];

//css mainpulation with js, avoid setting properties through javascript, instead activate add or remove
// clases on existing css with the following.

// agregar clases a un elemento seleccionado en una variable

var tags2 = document.querySelector("h1") ;

tag2.classList.add("h1Highlight") ;

// remove a clase from a selected element
tags2.classList.remove("h1Standard") ;

// toggle, toggles on or off a class from an element

tags2.classList.toggle("h1Highlight") ;


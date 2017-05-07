//css mainpulation with js, avoid setting properties through javascript, instead activate add or remove
// clases on existing css with the following.

// agregar clases a un elemento seleccionado en una variable
var tag2 = document.querySelector("h1") ;

// add class
tag2.classList.add("h1Highlight") ;

// remove a clase from a selected element
tag2.classList.remove("h1Standard") ;

// toggle, toggles on or off a class from an element
tag2.classList.toggle("h1Highlight") ;
//cambiar texto por javascript
//.textContent : devuelve el texto dentro de un elemento en el html
//.innerHtml : devuelve el texto y las html tags dentro de un elemento html y si lo modifico modifica,
// con las etiquetas html que le incluya, el text content solo modifica texto

// elementos para conseguir el atributo de elementos y modificarlo, modificar hyperlinks !!!!
//getAttribute("href" o "src")
var imgLink = document.querySelector(".pippin") ;
imgLink.getAttribute("href") ;
//setAttribute 2 variables
imgLink.setAttribute("href" ,"http://www.bing.com" ) ;1

//DOM EVENTS

var tag2 = document.querySelector("h1") ;

tag2.addEventListener("click",function(){
	tag2.textContent = "Someone has clicked the button"
	tag2.classList.toggle("h1Highlight") ;
}) 

var lis = document.querySelectorAll("li");

for (var i = 0 ; i < lis.length; i++) {
	lis[i].addEventListener("click",function(){
	this.style.color = "orange";
	});
}

//how to change background color of a div when clicked or of anything..

var button1 = document.querySelector(".butt1") ;
var buttBack = document.querySelector(".divButt1") ;

button1.addEventListener("click",backChange);

function backChange(element){
	buttBack.classList.toggle("backChange") ;
}


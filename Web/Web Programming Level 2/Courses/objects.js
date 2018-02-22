//OBJETOS
//guardar datos interrelacionados, va entre corchetes y cada propiedad con dos puntos
// no hay orden virtual index entre las cosas

var pessoa = {
	name: "Travis" ,
	age: 21 ,
	city: "LA" ,
	lover: "jordan" ,
}
// opcion 2, con punto (mas facil), no se puede usar si la propiedad empieza con numero, nunca empezar 
//propiedades de un objeto con numero o con espacio

console.log(person.name);

//update a value

pessoa.city = "Buenos Aires"

//objects can have a lot of properties, arrays, other objects, booleans, etc



// arrays que contienen objetos y a su vez esos objetos arrays con data, muy comun !!!!

var posts = [
	{
		//objecto 1
		title: "Braveheart" ,
		rating: " 10 " ,
		comment: ["awesome post" , "love you"]
	},
	{
		title: "The Patriot" ,
		rating: " 10 ",
		comment: ["awesome post" , "fuck you"]
	}
]


var movies = [
	{
		title: "Braveheart" ,
		rating: 10 ,
		hasWatched: true 
	},
	{
		title: "The Patriot" ,
		rating: 10 ,
		hasWatched: true 	
	},
	{
		title: "Cenicienta" ,
		rating: 1  ,
		hasWatched: false 
	}
]

11

console.log("Connected to .JS File")
var rootUrl = "https://platzi-music-api.now.sh"
var queriedArtists = []

// EVENT LISTENERS //

//Detector Submit De la Busqueda
$(".nombreArtista").on("submit",function(event){
	event.preventDefault();
	var artist = $(".formText").val()
	var artistData = getArtist(artist)
});

//Al clickear Icono Favoritos, mostrar estrella Llena y Pushear a storage
$("section").on("click",".fa-star-o",function(){
	var fullStar = "#" + $(this).attr("id") + "Full"
	$(this).toggle()
	$(fullStar).toggleClass("hidden")
	pushToStorage($(this).attr("id"))
})

// FUNCTIONS //
function getArtist(artistVal){
    $.ajax({
      url: rootUrl + "/search?q=" + artistVal + "&type=artist",
      type: 'get',
      dataType: 'json',
      success: function(data){
      	if(data.artists.items.length > 0){
      		queriedArtists = []
      		var cantidadArtistas = data.artists.items.length < 5 ? data.artists.items.length : 5; 
      		showData(data,cantidadArtistas)	
      	}else{
      		clearResults()
      		alert("No artists match your query. Please try another one")
      	}
      },
      error: function(err){
      	console.log(err)
      }
    })
};

function clearResults(){
	$(".resultsArea").empty()
}

function showData(dataArtista,cantidadArtistas){
	clearResults()
	for (var i = 0 ; i < cantidadArtistas; i++) {
		if (dataArtista.artists.items[i].images.length > 0) {
			var diskImg = dataArtista.artists.items[i].images[0].url ;
		} else {
			var diskImg = "http://polki.pl/we-dwoje/files/Image/art_bonus_oryg/we_dwoje_9_11987.jpg"
		}
		var artistObject = {
			id : dataArtista.artists.items[i].id,
			name :dataArtista.artists.items[i].name,
			img : diskImg
		}		
		queriedArtists.push(artistObject)
		var isFav = checkIfFav(artistObject)
		if (isFav){
			var defaultStar = "<i class='fa fa-star' id='"+dataArtista.artists.items[i].id+"Full'></i><i class='fa fa-star-o hidden' id='" + dataArtista.artists.items[i].id +"'></i>"
		}
		if (!isFav) {
			var defaultStar = "<i class='fa fa-star hidden' id='"+dataArtista.artists.items[i].id+"Full'></i><i class='fa fa-star-o' id='" + dataArtista.artists.items[i].id +"'></i>"
		}
		$(".resultsArea").append('<div class="col-sm-2">'+
					'<img class="img-circle album" src="' + diskImg +'">'+
					"<h4 class='albumName'>"+defaultStar+"<span class='artistName'>"+ " " + dataArtista.artists.items[i].name+
					"</span></h4></div>"
		)
	}
}

// Cada Vez Que Favoriteo me busca la ID del artista en mi object resultados y
// Pushea El nombre del Artista y URL de la Imagen al Local Storag como String via stringify
function pushToStorage(idClicked){
	var existingFavs = JSON.parse(localStorage.getItem("favs"));
    if(existingFavs == null) existingFavs = [];
	for (var i = 0 ; i <= queriedArtists.length ; i++) {
		if ( idClicked == queriedArtists[i].id){
			localStorage.setItem("latestFav", JSON.stringify(queriedArtists[i]));
			existingFavs.push(queriedArtists[i])
			localStorage.setItem("favs", JSON.stringify(existingFavs));
		return
		}
	}	
}

// cuando traigo los artistas, esta funcion chequea  si estan presentes en  storage y les muestra estrella llena if y

function checkIfFav (artistObject) {
	var currentFavs = getFavs()
	if (!currentFavs){
		return	false
	}
	if(currentFavs){
		for (var i = 0 ; i < currentFavs.length ; i++) {
			if (currentFavs[i].id == artistObject.id) {
				return true
			}
		}
	return	false 
	}
}

// Traer los favoritos y hacer el append a mi area
function getFavs(){
    var existingFavs = JSON.parse(localStorage.getItem("favs"));
    if (existingFavs){
    	return existingFavs
    } if (!existingFavs){
    	return false
    }
}

////////////////////////////////////// Solapa Favoritos //////////////////////////////////////



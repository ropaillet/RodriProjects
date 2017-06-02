var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.morbi vel gravida diam, ultricies interdum libero.etiam tempor, nunc eu dignissim rutrum, erat enim blandit magna, ut pretium risus nulla a sem.sed ut augue est.quisque pellentesque condimentum ligula vulputate tempus.curabitur non ex vitae urna vehicula gravida sit amet sit amet quam.phasellus et scelerisque sapien.donec finibus ac odio ac consectetur.integer ligula eros, posuere ac mauris non, pretium euismod elit.fusce porttitor sem quis neque varius ultricies.sed elementum blandit faucibus.donec nisi est, tempor eu neque eget, tempus dignissim libero.ut porttitor sapien eget placerat tristique.ut lacus sem, pulvinar et accumsan vitae, tristique quis sem.lorem ipsum dolor sit amet, consectetur adipiscing elit.nulla facilisi.suspendisse feugiat tempus lectus, ut venenatis lacus.sed et urna purus.morbi tincidunt volutpat consectetur.praesent vel diam efficitur, rhoncus lacus sit amet, feugiat mi.praesent egestas dignissim bibendum.ut congue porta est non maximus.vivamus quis imperdiet risus.cras vitae feugiat leo.fusce bibendum leo eu nisl cursus, quis tempor mi pulvinar.cras vel semper ante.aliquam tristique mauris sit amet viverra hendrerit."
var cantidadCaracteres = texto.length
var cantidadParrafos = parrafos(texto);
var spaced = spacer(texto);
var capitalized = capitalizer(spaced);
var cantidadEspaciosPuntos = capitalized.match(/([\s]+)/g).length + capitalized.match(/([.])\W/g).length;
var cantidadLetras = capitalized.match(/\w/g).length;

function parrafos (texto){
	var paragraphs = 0
	for (var i = 0 ; i <= texto.length; i++) {
		if(texto[i] == "." ){
			paragraphs ++
		}
	}
	return paragraphs;
}

// leave space after each paragraph and capitalize
function spacer (texto) {
	var newstring = texto.split('.').join('. ');
  	return newstring ;
}

// capitalize first letter of paragraph
function capitalizer(str) {
    return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1)
    });
}


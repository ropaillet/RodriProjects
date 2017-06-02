//Conexiones a base de datos o ese tipo de situaciones UNICAS

//Inicia una instancia 
var mySingleton = (function() {
    var instancia;

    //funcion iniciadora
    function init() {
        //Podemos tener metodos privados
        function metodoPrivado() {
            console.log("soy un metodo privado");
        }

        //Podemos tener variables privadas
        var numeroPrivado = Math.round(Math.random() * 1000);

        //Decidimos que metodos hacer publicos mediante el retorno
        return {
            metodoPublico: function() {
                console.log("imprimimos el metodo publico");
                metodoPrivado();
            },
            generarRandom: function() {
                return numeroPrivado;
            }
        }
    }

    return {
        crearInstancia: function() {
            if (!instancia) {
                instancia = init();
                return instancia;
            }
        }
    }
})();

var testeoInstancia = mySingleton.crearInstancia();

console.log(testeoInstancia.metodoPublico());

console.log(testeoInstancia.generarRandom());
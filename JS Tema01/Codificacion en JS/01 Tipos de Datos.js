//Declaración de variables var, let, comst

var nombre;
let codigo = 2;
const departamento = "dpt-5";


var nombre = "pepe";
if (true) {
    let nombre = "juan";
    console.log("Dentro del bloque ", nombre);
}
console.log("Fuera del bloque ", nombre)


//En JavaScript, las declaraciones  de variables o funciones se mueven al principio de su scope o ámbito. Este comportamiento se conoce como hoisting (elevación) y es muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.

nombre = "manuel";
saluda();

var nombre;

function saluda() {
    console.log("Saludos de " + nombre);
}


// Javascript tiene seis tipos primitivos: Sin definir (undefined), Nulo (null), Lógicos (boolean), Numérico (number), Cadena (string), Símbolo (symbol). Todos los demás tipos son objetos (Object): Array, Date, Promise...

var cadena = "abc";
var numero = 123;
var noDefinido = undefined;
var arreglo = [12, 45];

console.log(typeof(cadena));
console.log(typeof(numero));
console.log(typeof(noDefinido));
console.log(typeof(arreglo));

var animales = new Array;
animales = ["león", "pantera", 123, undefined];
console.log(animales);


//Infinity -infinity NaN

console.log(2 / "abc");

//Objetos

var persona = {
    nombre: "pepe",
    edad: 24,
    "codigo postal": 33200,
    saluda: function() {
        console.log("saludos de", this.nombre)
    }
    
};
persona["codigo postal"]

console.log(persona.saluda());
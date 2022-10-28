// Métodos del tipo String

//Tipo primitivo y objeto string

var tipoPrimitivo = "ejemplo de cadena";
var objString = new String("Cadena como objeto String");

console.log(typeof(tipoPrimitivo));
console.log(typeof(objString));



// Indices en Strings

var cadena = "abcdef";

console.log(cadena[2]);
console.log("esto es un ejemplo" [12]);

for (let index = 0; index < cadena.length; index++) {
    console.log(cadena[index]);
}



// Métodos de Strings

var cadena = "Esta es la cadena de ejemplo";

// console.log(cadena.length);

console.log(cadena.charAt(11));

console.log(cadena.indexOf("a"));

// console.log(cadena.lastIndexOf("a"));

// console.log(cadena.slice(5, 17));

// Para resumir, charAt() y slice() devuelven valores de cadena basados en números de índice, indexOf() y lastIndexOf() devuelven números de índice basados en los caracteres de cadena proporcionados.



// console.log(cadena.toUpperCase());
// console.log(cadena.toLowerCase());
// var cadena = "Esto es un ejemplo";
// var arreglo = cadena.split(" ");
// console.log(arreglo);

var cadena2 = "     Esta cadena tiene espacios en los extremos   ";
console.log(cadena2.length);
var cadenaSinEspacios = cadena2.trim();
console.log(cadenaSinEspacios.length);

var numero = 120;
var desdeNumero = numero.toString();
console.log(typeof(desdeNumero));

var cadena = "Esta es la cadena de ejemplo";

console.log(cadena);
console.log(cadena.replace("la cadena", "el string"));
console.log(cadena.replace("e", "0"));
console.log(cadena.replace(/e/gi, "0"));
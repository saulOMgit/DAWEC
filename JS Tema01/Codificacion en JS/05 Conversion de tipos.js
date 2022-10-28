// Conversión implícita vs explícita

console.log(33);
console.log("100" - "50");
console.log(3 * "2");
console.log("a" * 2);

// Convertir a string
var numero = 12;
var string1 = String(numero) * 10;
var string2 = numero.toString() + 10;
var string3 = String(true);
var string4 = true.toString();
var string5 = String(null);


// Convertir a número
var numero1 = Number(true);
var numero2 = Number("twelve");
var numero3 = Number("20.000");
var numero4 = Number("2 3");
var numero5 = Number("11-11-11");

// Convertir a enteros
var entero1 = parseInt("10"); //devuelve 10
var entero2 = parseInt("10 años"); //devuelve 10
var entero3 = parseInt("10 54"); //devuelve 10
var entero4 = parseInt("10.50"); //devuelve 10
var entero5 = parseInt("casi 10"); //devuelve NaN
var entero6 = parseInt("10", 16); //devuelve 16
var entero7 = parseInt("100")+parseInt("50"); //devuelve 150
// Convertir a float
var flotante1 = parseFloat("10"); //devuelve 10
var flotante2 = parseFloat("10.5 años"); //devuelve 10.5
var flotante3 = parseFloat("10 54"); //devuelve 10
var flotante4 = parseFloat("10.50"); //devuelve 10.50
var flotante5 = parseFloat("casi 10.4"); //devuelve NaN
var flotante6 = parseFloat("1.000,33"); //devuelve 1
var flotante7 = parseFloat("10,50"); //devuelve 10

// Ejemplo
var strEx = "1.000,33";
//primer paso: fuera puntos
strEx = strEx.replace(".", "");
//cambiamos la coma por un punto
strEx = strEx.replace(",", ".");
//listo
var numFinal = parseFloat(strEx);

// Convertir booleanos
var bol1 = Boolean(0);
var bol2 = Boolean("");
var bol3 = Boolean(undefined);
var bol4 = Boolean(NaN);
var bol5 = Boolean(null);
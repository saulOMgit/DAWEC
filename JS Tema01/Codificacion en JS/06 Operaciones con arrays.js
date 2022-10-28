//Declarar arrays
var animales = ["León", "Tigre", "Jirafa", "Puma", "Elefante"];
var frutas = new Array("Pera", "Manzana", "Plátano", "Melón");
var lista1 = new Array(4)
lista1[12] = "Entrada 12"
var lista = [];

//Longitud y conversion a string
var numfrutas = frutas.length;
var misFrutas = frutas.toString();
var frutasConSeparador = frutas.join(" - ");

//Acceder a elementos del array
var fruta = frutas[3];
var noFruta = frutas[100];

//Recorrer arrays
for (let index = 0; index < animales.length; index++) {
    if (animales[index] == "Tigre") break;
}

for (const indice in animales) {
    if (animales[indice] == "Puma") break;
}

for (const animal of animales) {
    if (animal == "Puma") break;
}
// for..in itera sobre todas las claves de propiedad enumerables de un objeto
// for..of itera sobre los valores de un objeto iterable. Ejemplos de objetos iterables son arrays, cadenas y NodeLists.

//Añadir elementos al array
var colores = ["Rojo", "Azul"];
colores[0] = "Verde";
colores[2] = "Amarillo";
colores[10] = "Marrón";

for (const color of colores) {
    let miColor = color;
}

//push y unshif
var colores = ["Rojo", "Amarillo"];
colores.push("Verde");
colores.unshift("Rosa");

//eliminar elementos del array splice, slice
var frutas = ["Pera", "Manzana", "Plátano", "Melón"];
var newFrutas = frutas.splice(1, 2);

var frutas = ["Pera", "Manzana", "Plátano", "Melón"];
var newFrutas = frutas.slice(1, 2);

//pop y shift
var frutas = ["Pera", "Manzana", "Plátano", "Melón"];
var newFrutas = frutas.pop();
var newFrutas2 = frutas.shift(); //Se modifican los índices de los elementos

//Modificar elementos del array con splice. fill()
var frutas = ["Pera", "Manzana", "Plátano", "Melón"];
var newFrutas = frutas.splice(2, 1, "Nuev fruta1", "nuevo 2");

frutas.fill("Kiwi");
var lista = new Array(100);
lista.fill(10);

//Ordenar arrays de una dimensión y de string
var ciudades = ["París", "Madrid", "Zaragoza", "Gijón", "Londres"];
ciudades.sort();
ciudades.reverse();

var numeros = [5, 10, 23, 200, 8, 54];
numeros.sort();


//Busquedas en arrays: indexOf, lastIndexOf
var ciudades = ["París", "Madrid", "Zaragoza", "Gijón", "Londres"];
var existeGijon = ciudades.indexOf("Gijón"); //si no existe devuelve -1
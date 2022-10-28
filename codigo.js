// declarar variables (no es obligatorio acabar en punto y coma). En JavaScript NO se declaran los tipos
//variable global
var nombre;
//Esto seria valido ya que se sobrescribe el tipo (ya que no tiene)
nombre = "pepe";
nombre = 12;

//Arrancamos una consola, parecido a como sería en Eclipse, con el fin de verificar
console.log("El nombre es "+nombre);

//nueva estructura de creación de variables
//variable local (para funciones, bloques de codigo...etc)
let edad = 28;

//constantes (su valor no variara)
const dtp = 12;
// Depurar en VSC
var cadena = "Esta cadena es para un ejemplo de depuración";
var numeroA = 0;

function cuenta() {
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index] == "a" || cadena[index] == "A") {
            numeroA++;
        }
    }
}
cuenta();
console.log(`La cadena tiene ${numeroA} caracteres "a" o "A"`);
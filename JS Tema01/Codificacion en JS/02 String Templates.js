//String templates (acento grave `` alt 96)

var direccion = `Calle de "Pez", '14'`; //en lugar de "" ''
console.log(direccion);

var persona = {
    nombre: "Juan",
    edad: 24,
    direccion: "Calle del Pez, 14"
};
// var salida = "La persona " + persona.nombre + " tiene " + persona.edad + " años y vive en " + persona.direccion;

var salida = `La persona: \t ${persona.nombre} tiene ${persona.edad} años \n y vive en ${persona.direccion}`;

console.log(salida);
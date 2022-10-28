//Crear objetos: objetos literal y constructor new
const persona = {
    nombre: "Pepe",
    edad: "35",
    saluda: function() {
        console.log(`Saludos de ${this.nombre}`);
    }
}

const animal = new Object();
animal.nombre = "León";
animal.especie = "Mamífero";
animal.ruge = function() {
    console.log("RRRRRRRGGggggggg");
};

//Acceso a propiedades y métodos
var animalNombre = animal.nombre;
var animalEspecie = animal["especie"];
animal.ruge();

//Más sobre propiedades
const proceso = {
    codigo: 10,
    "estado de proceso": false,
    "": "Propiedad rara"
}
var estado = proceso["estado de proceso"];
var otraProp = proceso[""];

proceso.codigo = 2;
proceso["codigo"] = 14;
console.log(proceso.codigo);

//Creación dinámicas de propiedades y métodos
proceso.asignado = "Antonio F.";
proceso.info = function() {
    return `El proceso ${this.codigo} está asignado a ${this.asignado}`;
};

var infoProc = proceso.info();

//Propiedades como variables
var viabilidad = "En estudio";
proceso[viabilidad];

//Eliminar propiedades de un objeto
delete proceso[""];

//Congelar un objeto
Object.freeze(proceso);
delete proceso.codigo;
proceso.newPropiedad = "Nueva";

//Recorrer las propiedades de un objeto
var elementosPersona = new Array();
for (const clave in persona) {
    elementosPersona.push([clave, persona[clave]]);
}
console.table(elementosPersona);

// for..in itera sobre todas las claves de propiedad enumerables de un objeto
// for..of itera sobre los valores de un objeto iterable. Ejemplos de objetos iterables son arrays, cadenas y NodeLists.

var elementosPersona = new Array();
for (let clave of Object.keys(persona)) {
    elementosPersona.push([clave, persona[clave]]);
}
console.table(elementosPersona);

//=============================================
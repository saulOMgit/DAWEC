var objeto1 = new Object();

function Departamento(codigo, nombre) {
    this.codigo = codigo;
    this.nombre = nombre;
}

var ventas = new Departamento(1, "Ventas");


var proto1 = ventas.__proto__;
var proto2 = Object.getPrototypeOf(ventas);
var proto3 = ventas.prototype;

ventas.estado = true;

String.prototype.mebresia = function(tratamiento) {
    return `${tratamiento} ${this}`;
}
var c = "Paula García";
var cadena = c.mebresia("Sr.");

let x;
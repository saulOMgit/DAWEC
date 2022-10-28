// Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.

//Propiedades
const pi = Math.PI;
const e = Math.E;

//Métodos
const valor01 = Math.abs(10);
const valor02 = Math.abs(-10);
const valor03 = Math.abs('-15');
const valor04 = Math.abs('Cadena de texto');
const valor05 = Math.sqrt(4);
const valor06 = Math.sqrt("120");
const valor07 = Math.sqrt(-4);

const valor08 = Math.round(4.5);
const valor09 = Math.round(4.4);
const valor10 = Math.floor(4.4);
const valor11 = Math.floor(4.9);

const valor12 = Math.max(73, 100, 32, 12, 51);
const valor13 = Math.min(73, 100, 32, 12, 51);

const valor14 = Math.pow(2, 4);
const valor15 = Math.exp(3) //E elevado a n -> Math.E = 2.718281828459045;

// Las funciones trigonométricas (sin(), cos(), tan(), asin(), acos(), atan(), atan2()) devuelven ángulos en radianes. Para convertir radianes a grados, se divide por (180 / Math.PI), y se multiplica por esto para convertir a la inversa.
const valor16 = Math.sin(0);
const valor17 = valor16 * (180 / Math.PI);
const valor18 = Math.cos(0);
const valor19 = valor18 * (180 / Math.PI);

// Math.random genera números pseudo-aleatorios: mayor o igual a cero y menor a 1
for (let index = 0; index < 10; index++) {
    console.log(Math.random());
}
var min = 1;
var max = 5;


// array para anotar la distribución de valores obtenidos
let distribucion = [];

// Inicializamos los elementos del array desde min a máx a 0 para operar con enteros. Los elementos de 0 a min - 1 no se inicializan porque no se utilizan
for (let index = min; index <= max + 1; index++) {
    distribucion.push(0);
}

// Genera número aleatorio entre min y max
function getAleatorio(min, max) {
    // return Math.round(Math.random() * (max - min) + min);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generación de números aleatorios entre min y max
for (let i = 0; i <= 10000; i++) {
    let aleatorio = getAleatorio(min, max);
    // Se incrementa en el array el valor correspondiente
    distribucion[aleatorio]++;
}
// Mostramos tabla en consola con la distribución:
// Math.floor() da una distribución más uniforme pero genera números hasta max-1
// Math.round no genera una distribución tan uniforme pero si hasta max 

console.table(distribucion);

// ¿Cómo funciona el código anterior?
// Suponiendo que a = 5 y b = 60 primero se haría: Math.random()*(60-5) Lo que da un número entre 0 y 55 (con números decimales). Entonces sumamos ‘a=5’, para tener un número entre 5 y 60, todavía con decimales y por último, utilizamos Math.round() para eliminar los decimales.
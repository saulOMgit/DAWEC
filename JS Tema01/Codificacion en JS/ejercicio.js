//¿Que quieres contar? Cuantas veces se repite la letra "a" en esta frase
var cadena = "Raul Pastrana"
var contador=0
for (let index=0;index<cadena.length;index++){
    if(cadena.charAt(index)=="a"){
        contador++
    }
}

console.log(contador)
//
var nombre
var apellido

nombre=cadena.split(" ")
console.log(nombre[0])


//Usar el metodo slice() para mostrar solo Banana,Kiwi
var fruta="Platano, Pera, Banana, Kiwi"
console.log(fruta.slice(fruta.indexOf("B"),fruta.length))
    //otra manera
var ar=fruta.split(", ");
console.log(ar.toString());
console.log(ar.slice(2,4));

//calcular el IVA de un precio
var precio = 10;
precio=parseFloat(precio);
function iva(precio){
    // precio=precio*1.21;
    precio=precio*(1+21/100)
    return precio;
}
precio=iva(precio);
console.log("precio + IVA: "+precio)

//reescribe if como ?
let result;
var a=5;
var b=2;
result= (a+b<4) ? "Debajo":"Encima";
console.log(result);

//muestra todos los divisibles entre 2 y 3 del 1 al 100
for (var i=1;i<=100;i++){
    if(i%2==0 || i%3==0)
        console.log(i);
}


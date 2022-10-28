window.onload = function () {
    //new
    //variables globales
    var operacion = "", operando1 = 0, operando2 = 0, resultado = 0;

    //Referencias a elementos HTML
    const display = document.querySelector("input");
    const digitos = document.querySelectorAll(".digito");
    const aritmeticas = document.querySelectorAll(".aritmetica");
    const igual = document.querySelector(".igual");
    const borrados = document.querySelectorAll(".borrado");
    
    const memorias= document.querySelectorAll(".memoria");
    let divmemoria=document.querySelector(".displaymemoria");
    
    //Manejador de evento para botones digito
    for (let digito of digitos) {
        digito.addEventListener("click", procesaDigito);
    }
    //Manejador de evento para operaciones aritméticas
    for (let aritmetica of aritmeticas) {
        aritmetica.addEventListener("click", operacionAritmetica);
    }
    //manejador de evento (DOM??) para botón igual;
    document.querySelector(".igual").addEventListener("click", realizaOperacion);

    //manejador de evento para borrados
    for (let borrado of borrados) {
        borrado.addEventListener("click", operacionBorrado);
    }

    //manejador de evento para memoria
    for (let memoria of memorias ){
        memoria.addEventListener("click", operacionMemoria);
    }


    //funciones manejadoras de eventos
    function procesaDigito() {     
        if (display.value == "NaN") {
            display.value = this.textContent;
        } else {
            display.value = (display.value == "0") ? display.value = this.textContent : display.value = display.value + this.textContent;
        }

    }

    function operacionAritmetica() {
        operando1 = parseFloat(display.value);
        switch (this.textContent) {
            case "%":
                display.value = operando1/ 100;
                break;
            case "Π":
                display.value = Math.PI;
                break;
            case "e":
                display.value = Math.E;
                break;
            case "+":
            case "-":
            case "/":
                operacion = this.textContent;
                operando1 = parseFloat(display.value);
                display.value = "";
                break;
            case "x":
                operacion = "*";
                operando1 = parseFloat(display.value);
                display.value = "";
                break;
            case "sin":
                display.value = Math.sin(display.value);
                break;
            case "cos":
                display.value = Math.cos(display.value);
                break;
            case "1/x":
                display.value = eval(1 / display.value);
                break;
            case "x2":
                display.value = Math.pow(operando1, 2);
                break;
            case String.fromCharCode(8730):
                display.value = Math.sqrt(display.value);
                break;
            case "+/-":
                if(display.value.slice(0,1)=="-"){
                    display.value=display.value.substring(1);
                }else{
                    display.value="-"+display.value;
                }
                break;
            default:
                break;
        }

    }

    function operacionBorrado() {
        switch (this.textContent) {
            case "CE":
                display.value = "0";
                break;
            case "C":
                operacion = "", operando1 = 0, operando2 = 0, resultado = 0;
                display.value = "0";
                break;
            case "return":
                display.value = display.value.slice(0, -1);
                if (display.value == "") {
                    display.value = "0";
                }
                break;
        }

    }

    function realizaOperacion() {
        operando2 = display.value;
        //String builder
        resultado = `${operando1} ${operacion} ${operando2}`;
        //eval realiza la operacion anterior
        display.value = eval(resultado);
        // operando1 = 0;
    }

    function operacionMemoria(){
        switch(this.textContent){
            case "Mshow":
                divmemoria.style.top=(parseInt(divmemoria.style.top)==40) ? "320px":"40px";

                if ((parseInt(divmemoria.style.top)==320)){
                    divmemoria.style.overflow="hidden";
                } else{
                    divmemoria.style.overflow="visible";
                }
                break;
            case "MS":
                let ultimoElemento=document.querySelector(".divmemoria div:last-of-type");
                let contador = (ultimoElemento) ? parseInt(ultimoElemento.firstElementChild.value)+1:"1";

                divmemoria.innerHTML+=`<div class="topright">
                <input type="radio" value="${contador}" name="item-memoria" id="item${contador}">
                <label for="item${contador}">${display.value}</label>
                </div>`;
                break;
            default:
                break;
        }
    }

}
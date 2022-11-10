import { preguntas } from "./miJson.js";

// console.log(preguntas)

window.onload = function(){

    //Creamos referencias
    let nav = document.querySelector("nav");
    let seccionCuestionario = document.querySelector(".cuestionario");

    let contadorCategoria=0;

    for (let categoria of preguntas){
        contadorCategoria+=1;
        let divEleccionCategoria = document.createElement("div");
        // divEleccionCategoria.classList.add("eleccion-materia");
        divEleccionCategoria.innerHTML +=`
        <input type="radio" name="categoria" id="categoria${contadorCategoria}">
        <label for="categoria${contadorCategoria}">${categoria.categoria}</label>
        `;
        divEleccionCategoria.firstElementChild.addEventListener("change",eleccionCategoria);
        nav.appendChild(divEleccionCategoria);
    }

    let cuestionario=[];

    function eleccionCategoria(){
        //Esto elimina entrada, revisar porque no existe
        if(document.querySelector(".entrada"))
            document.querySelector(".entrada").remove();
        let categoria=this.nextElementSibling.textContent;
        cuestionario=preguntas.filter(elementos => elementos.categoria.includes(categoria));

        //se elimina el contenido del cuestionario
        seccionCuestionario.innerHTML="";

        for(let categoria of cuestionario){
            //revisar apuntes para imagenes

            let h1=document.createElement("h1");
            h1.textContent=categoria.categoria;
            //header
            seccionCuestionario.appendChild(h1);
        }
    }
}
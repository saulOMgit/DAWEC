import { preguntas } from "./miJson.js";

// console.log(preguntas)

window.onload = function(){

    //Creamos referencias
    let nav = document.querySelector("nav");
    let seccionCuestionario = document.querySelector(".cuestionario");

    let contadorCategoria=0;
    let contadorPregunta=0;
    let contadorRespuesta=0;
    for (let categoria of preguntas){
        contadorCategoria+=1;
        let divEleccionCategoria = document.createElement("div");
        divEleccionCategoria.classList.add("eleccion-categoria");
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
            
            contadorPregunta=0;
            contadorRespuesta=0;
            
            for (let preguntas of categoria.pregunta){
                let h2=document.createElement("h2");
                h2.textContent=`${contadorPregunta+1}.`+preguntas.pregunta;
               

                contadorPregunta+=1;
                
                let divpreguntas=document.createElement("div");
                divpreguntas.className="midivpreguntas";
                seccionCuestionario.appendChild(divpreguntas);
                divpreguntas.appendChild(h2);
                // prueba
                let divrespuestas=document.createElement("div");
                divrespuestas.className="midivrespuestas";
                divpreguntas.appendChild(divrespuestas);
                // fin prueba

                
                for (let respuesta of preguntas.respuestas){
                    contadorRespuesta+=1;
                    let input=document.createElement("input");
                    let label=document.createElement("label");
                    input.name=`pregunta${contadorPregunta}`;
                    input.id=`pregunta${contadorRespuesta}`;
                    label.setAttribute("for", `pregunta${contadorRespuesta}`);
                    label.textContent=respuesta.respuesta
                    
                    if (preguntas.modo=="simple"){
                    input.type="radio";
                    }
                    else{
                        input.type="checkbox";
                    }
                              
                    divrespuestas.appendChild(input);
                    divrespuestas.appendChild(label);
                }
            
            }
            
        }
        let button=document.createElement("button");
            button.textContent="Enviar";
            seccionCuestionario.appendChild(button);
            let miboton=document.querySelector("button");
            miboton.addEventListener("click",correcion);
    }
    

    
    function correcion(){
        let numero=seccionCuestionario.querySelectorAll(".midivpreguntas").length;
        let categoria=this.nextElementSibling.textContent;
        cuestionario=preguntas.filter(elementos => elementos.categoria.includes(categoria));
        // for (let categoria of cuestionario){
        //     for (let pregunta of categoria.pregunta){
        //         for(let respuesta of pregunta.pregunta)
        //     }

        // }
        alert(numero);
    }
}
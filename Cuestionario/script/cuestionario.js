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
                
                let articlepreguntas=document.createElement("article");
                articlepreguntas.className="miarticlepreguntas";
                seccionCuestionario.appendChild(articlepreguntas);
                articlepreguntas.appendChild(h2);
                
                

                
                for (let respuesta of preguntas.respuestas){
                    contadorRespuesta+=1;
                    let input=document.createElement("input");
                    let label=document.createElement("label");
                    input.name=`pregunta${contadorPregunta}`;
                    input.id=`pregunta${contadorRespuesta}`;
                    if (respuesta.correcta=="true"){
                        input.setAttribute("value","t");
                    } else {
                        input.setAttribute("value","f");
                    }
                    label.setAttribute("for", `pregunta${contadorRespuesta}`);
                    label.textContent=respuesta.respuesta
                    
                    if (preguntas.modo=="simple"){
                    input.type="radio";
                    }
                    else{
                        input.type="checkbox";
                    }
                              
                    articlepreguntas.appendChild(input);
                    articlepreguntas.appendChild(label);
                }
            
            }
            
        }
        let button=document.createElement("button");
            button.textContent="Enviar";
        let envoltorio=document.createElement("div");
        envoltorio.className="envoltorio";
            seccionCuestionario.appendChild(envoltorio);
            envoltorio.appendChild(button);
            // seccionCuestionario.appendChild(button);
            let miboton=document.querySelector("button");
            miboton.addEventListener("click",correcion);
    }
    

    
    function correcion(){
         let preg=document.querySelectorAll("article input");        
         let  numCorrecta=0;
         let numcheck=0;
         let numResp=0;
         for (let p of preg){
             if(p.checked && p.value=="t"){
                if(p.type=="checkbox"){
                    let checkbox=document.querySelectorAll("input[name="+p.name+"]");
                    for (let check of checkbox){                        
                        if (check.value=="t"){
                            numcheck+=1;
                            if (check.checked){
                                numResp+=1;
                            }
                        }
                    }
                    numResp=numResp/numcheck;
                    numCorrecta=numCorrecta+numResp;


                } else
                numCorrecta+=1;                
             }
            
         }
        //  alert(numCorrecta);
         
         ;
    }
}
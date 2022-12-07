//Importamos las preguntas de nuestro json
import { preguntas } from "./miJson.js";

// console.log(preguntas)

window.onload = function(){

    //Creamos referencias
    let nav = document.querySelector("nav");
    let seccionCuestionario = document.querySelector(".cuestionario");
    //Creamos el div contenedor de botones de correccion que usaremos mas adelante
    let envoltorio=document.createElement("div");
    //contadores para las creacion de preguntas
    let contadorCategoria=0;
    let contadorPregunta=0;
    let contadorRespuesta=0;
    //Boton para la correccion
    let button=document.createElement("button");
    button.textContent="Enviar";

    //pintamos tantas imagenes como categorias
    let divimagen=document.querySelector("#categorias");
    for (let imagen of preguntas){
        let mimagen= document.createElement("img");
        mimagen.setAttribute("src",`../img/${imagen.imagen}`);
        mimagen.setAttribute("alt",imagen.categoria);
        mimagen.setAttribute("title",imagen.categoria);
        divimagen.appendChild(mimagen);
    }
    // por cada categoria de nuestro json añadiremos un input con su label
    for (let categoria of preguntas){
        contadorCategoria+=1;
        let divEleccionCategoria = document.createElement("div");
        divEleccionCategoria.classList.add("eleccion-categoria");
        divEleccionCategoria.innerHTML +=`
        <input type="radio" name="categoria" id="categoria${contadorCategoria}">
        <label for="categoria${contadorCategoria}">${categoria.categoria}</label>
        `;
        //llamaremos a la funcion explicada mas abajo
        divEleccionCategoria.firstElementChild.addEventListener("change",eleccionCategoria);
        nav.appendChild(divEleccionCategoria);
    }

    let cuestionario=[];

    function eleccionCategoria(){
        //si estan las imagenes de cada categoria, las eliminamos
        if (document.querySelector(".bienvenida"))
            document.querySelector(".bienvenida").remove();

        //Aqui he utilizado la funcion que explicaste para filtrar por categoria, no he dado con otra forma de hacerlo
        let categoria=this.nextElementSibling.textContent;
        cuestionario=preguntas.filter(elementos => elementos.categoria.includes(categoria));

        //limpiamos la pagina de elementos ya pintados
        seccionCuestionario.innerHTML="";
        envoltorio.innerHTML="";
        for(let categoria of cuestionario){           
            
            contadorPregunta=0;
            contadorRespuesta=0;
            
            for (let preguntas of categoria.pregunta){
                //Creamos y pintamos cada titulo
                let h2=document.createElement("h2");
                
                //le asinamos simple o multiple a la pregunta que sea
                if (preguntas.modo=="simple"){
                    h2.textContent=`${contadorPregunta+1}.`+preguntas.pregunta+" Simple";
                    }
                    else{
                        h2.textContent=`${contadorPregunta+1}.`+preguntas.pregunta+" Multiple";
                    }

                contadorPregunta+=1;
                
                let articlepreguntas=document.createElement("article");
                articlepreguntas.className="miarticlepreguntas";
                seccionCuestionario.appendChild(articlepreguntas);
                articlepreguntas.appendChild(h2);
                
                

                
                for (let respuesta of preguntas.respuestas){
                    //Pintamos y creamos cada input y label de cada pregunta
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
                    
                    //Si fuera normal, le añadimos un radio, si no, checkbox
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
        
        //Creamos un boton con la funcion de corregir, envuelto en un div
        envoltorio.className="envoltorio";
            seccionCuestionario.appendChild(envoltorio);
            envoltorio.appendChild(button);
            // seccionCuestionario.appendChild(button);
            let miboton=document.querySelector("button");
            miboton.addEventListener("click",correcion);
    }


    function correcion(){
        //seleccionamos todas las respuestas y creamos contadores
        let preg=document.querySelectorAll("article input");        
        let  numCorrecta=0;
        let numcheck=0;
        let numResp=0;
        let c=0;
        //checkeamos una por una
        for (let p of preg){
            //si es checkbox llamamos a otra funcion y como todas son 4 respuestas contamos hasta 4
            //esta funcionalidad me ha dado bastantes problemas e imagino que habra soluciones mas
            //apropiadas, pero funciona
            if(p.type=="checkbox"){
                  
                numcheck=numeroCorrectas(p.name);
                c++;
                if (c==4){
                  numCorrecta=numCorrecta+numcheck;
                  c=0;
                }
                //si es normal, esta marcada y es verdadera sumamos un punto
            }else{       
                if(p.checked && p.value=="t"){      
                    numCorrecta+=1;   
                }
        }
        if(p.checked && p.value=="t"){      
            //si es verdadera/falsa le añadimos una clase para modificarle el color
            let mlabel=document.querySelector("label[for="+p.id+"]");
            mlabel.className="correcta";
       } else if (p.checked && p.value=="f") {
       let mlabel=document.querySelector("label[for="+p.id+"]");
       mlabel.className="incorrecta";
    }
    }   
        
       //creamos un div mostrando los resultados
        let divPuntuacion=document.createElement("div");
        divPuntuacion.className="puntaje";
        //redondeamos el numero
        numCorrecta=Math.round((numCorrecta + Number.EPSILON) * 100) / 100
        divPuntuacion.innerHTML=`Puntuacion: ${numCorrecta}/10`;
        seccionCuestionario.appendChild(divPuntuacion);
        //como se crea al final de la pagina, nos movemos a el
        window.scrollTo(0, document.body.scrollHeight);
        //creamos un boton de reset solo disponible si se ha corregido
        createReset();
        //eliminamos la funcion de corregir
        button.removeEventListener("click",correcion);
   }

   //esta funcion nos devolvera de cada checkbox su puntuacion proporcional
   //si hay dos correctas cada una puntuara 0,5
   //si hay 3 correctas cada una puntuara 0,33
   function numeroCorrectas(name){
       let checkbox=document.querySelectorAll("input[name="+name+"]");   
       let numcheck=0; 
       let contador=[];
       contador=checkbox.length;

       let correctas=0;
       let c=0;
       for (let check of checkbox){                                                        
           if (check.value=="t"){
              numcheck+=1;
           }   
           if (check.checked && check.value=="t"){
               correctas+=1;
           }
           c+=1;
           if (c==4){
               correctas=correctas/numcheck;
               return correctas;
           }    
       }       
       
  
   }

   //Creamos lo necesario para generar un boton de reset
   let botreset=document.createElement("button")
   botreset.className="reset";
   botreset.textContent="Reset"
   function createReset(){
        
        botreset.addEventListener("click",Reset);
        envoltorio.appendChild(botreset);
   }

   function Reset(){
    let preg=document.querySelectorAll("article input");
        //para cada pregunta si estaba marcada la desmarcamos y reseteamos los estilos quitandoles la clase 
        for (let p of preg){
           p.checked=false;
            let mlabel=document.querySelector("label[for="+p.id+"]");
            mlabel.className="";          
        }
        //Eliminamos la puntuacion
        let puntaje=document.querySelectorAll(".puntaje");
        puntaje.forEach(puntos => {
            puntos.remove();
        })
        //Le devolvemos a corregir la funcionalidad y se la quitamos al reset
        button.addEventListener("click",correcion);
        
        
   }
   
}

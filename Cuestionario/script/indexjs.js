//Exporto las preguntas de mi json
import { preguntas } from "./miJson.js";
window.onload= function() {
    //Seleccionamos el div donde insertamos las imagenes
    let divimagen=document.querySelector("#categorias");
    for (let imagen of preguntas){
        //creamos un elemento imagen con el la ruta y la imagen que queremos (en nuestro caso seran dos)
        let mimagen= document.createElement("img");
        mimagen.setAttribute("src",`../img/${imagen.imagen}`);
        mimagen.setAttribute("alt",imagen.categoria);
        mimagen.setAttribute("title",imagen.categoria);
        divimagen.appendChild(mimagen);
    }
}
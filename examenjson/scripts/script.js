import{productos} from "./productos.js";
window.onload=function(){

    //Variables
    var salidaProductos="";

    //Creamos elementos principales
    const header=document.createElement("h1");
    header.innerText="Productos clasificados";
    const contenedor = document.createElement("div");
    const divProductos=document.createElement("section");
    const gruposAB=document.createElement("div");
    const grupoA=document.createElement("div");
    grupoA.innerHTML="<h3>Grupo A</h3><div></div>"
    const grupoB=document.createElement("div");
    grupoB.innerHTML="<h3>Grupo B</h3><div></div>"

    //Añadimos propiedades a elementos y los colocamos e body y gruposAB
    contenedor.classList.add("contenedor");
    divProductos.classList.add("productos");
    gruposAB.classList.add("grupo");
    grupoA.classList.add("grupoA");
    grupoB.classList.add("grupoB");

    document.body.appendChild(header);
    document.body.appendChild(contenedor)
    contenedor.appendChild(divProductos);
    contenedor.appendChild(gruposAB);
    gruposAB.appendChild(grupoA);
    gruposAB.appendChild(grupoB);

    for(let producto of productos){
        salidaProductos += `
        <article>
            <img src="./imagenes/${producto.foto}" alt="${producto.denominacion}" width=200px>
            <div class="texto">
                <h3>${producto.denominacion}</h3>
                <span>${producto.comentario}</span>
                <div class="botones">
                    <span class="boton">Grupo A</span>
                    <span class="boton">Grupo B</span>
                </div>
            </div>
        </article>
        `
    }

    //salidaProductos en divProductos que ya está en el DOM
    divProductos.innerHTML=salidaProductos

    //NodeList de botones class="boton" y addEventListener
    const botones=document.querySelectorAll(".boton");
    for (let boton of botones){
        boton.addEventListener("click",asignaGrupo);
    }

    function asignaGrupo(){
        this.removeEventListener("click",asignaGrupo);
        this.style.color="white";
        this.style.backgroundColor="black";
        this.style.flexGrow=1;
        let imagen=`
            <picture>
                <img src="${this.parentNode.parentNode.parentNode.children[0].src}" alt="Imagen producto">
                <figcaption>${this.parentNode.parentNode.parentNode.children[1].children[0].textContent}</figcaption>
            </picture>
        `

        switch(this.innerText){
            case "Grupo A":
                grupoA.children[1].innerHTML+= imagen;
                this.nextElementSibling.removeEventListener("click",asignaGrupo);
                this.nextElementSibling.style.display="none";
                break;
            case "Grupo B":
                grupoB.children[1].innerHTML +=imagen;
                this.previousElementSibling.removeEventListener("click",asignaGrupo);
                this.previousElementSibling.style.display="none";
                break;
        }
    }
}
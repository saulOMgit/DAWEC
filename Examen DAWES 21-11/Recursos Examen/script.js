import { productos } from "./productos.js";

window.onload = function(){

    //creamos selectores para body
    //y creamos un header
    let miheader=document.createElement("header");
    let mibody=document.querySelector("body");
    miheader.textContent="Productos clasificados";    
    mibody.appendChild(miheader);

    //creamos un section que va a contener 2 articles
    let misection=document.createElement("section");
    let miarticle=document.createElement("article");
    let miarticle2=document.createElement("article");
    
    miarticle.className="listaproducto"
    miarticle2.className="grupos";
    
   

// Iteramos por productos para crear un div con su foto, nombre y descripcion
    for (let producto of productos){
        let miproducto=document.createElement("div");
        miproducto.className="miproducto";
        //foto
        let mifoto=document.createElement("div");
        mifoto.className="mifoto";
        let miimg=document.createElement("img");
        //Extraemos del json la en nombre de foto, denonimacion por si falla y para cuando pasemos el raton por encima
        miimg.setAttribute("src",`./imagenes/${producto.foto}`);
        miimg.setAttribute("alt",producto.denominacion);
        miimg.setAttribute("title",producto.denominacion);
        mifoto.appendChild(miimg);
        //descripcion sera un div que tenga un h4 con el nombre del producto
        //y un p con el comentario
        let midescripcion=document.createElement("div");
        midescripcion.className="midescripcion";
        let mih4=document.createElement("h4");
        mih4.textContent=producto.denominacion;
        midescripcion.appendChild(mih4);

        let mip=document.createElement("p");
        mip.textContent=producto.comentario;
        midescripcion.appendChild(mip);

        // Creamos los botones para cada producto que asignaran cada producto a un grupo
        let botonA=document.createElement("button");
        let botonB=document.createElement("button");
        botonA.className=producto.denominacion;
        botonB.className=producto.denominacion;
        botonA.innerText="Grupo A";
        botonB.innerText="Grupo B";

        //insertamos todo lo creado al HTML
        midescripcion.appendChild(botonA);
        midescripcion.appendChild(botonB);

        miproducto.appendChild(mifoto);
        miproducto.appendChild(midescripcion);
        miarticle.appendChild(miproducto);
    }


    //creo una referencia a todos los botones
    const botones=document.querySelectorAll("button");
    //recorro los botones seleccionados
    for (let boton of botones){
        boton.addEventListener("click",asigna);

        //mi idea de esto era iterar los productos ( a los cuales les he dado como clase el nombre del producto)
        //no funciona, pero es una idea creo que aproximada, no se lo que fallara, lo dejo descomentado por si es de utilidad
        //(y porque me gustaria darle solucion)
    
    }
    function asigna(){
        let divasignado=createElement("div");
        let fotoasignada=createElement("img");
        let pasignado=createElement("p");
        
        for (let producto of productos){
            if (boton.className==producto.denominacion){            
                fotoasignada.setAttribute("src",`./imagenes/${producto.foto}`);
                fotoasignada.setAttribute("alt",producto.denominacion);
                fotoasignada.setAttribute("title",producto.denominacion);
                pasignado.textContent=producto.comentario;

                divasignado.appendChild(fotoasignada);
                divasignado.appendChild(pasignado);
            }
        }
        //Esto eliminaria el evento despues de haber operado con el
        boton.removeEventListener;     
    }
    //creacion de grupos
    let divGA= document.createElement("div");
    divGA.className="grupo GA";    
    let divGB= document.createElement("div");
    divGB.className="grupo GB";

    divGA.textContent="Grupo A";
    divGB.textContent="Grupo B";

    //insertarmos lo creado en el HTML
    miarticle2.appendChild(divGA);
    miarticle2.appendChild(divGB);
    misection.appendChild(miarticle);
    misection.appendChild(miarticle2);
    mibody.appendChild(misection);
}
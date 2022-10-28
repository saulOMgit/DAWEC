window.onload = function(){
    //declaramos las variables
    let misBotones = document.querySelectorAll(".boton");
    let divColor = document.querySelectorAll(".divcolor");
    let colorear = document.querySelector("colorado");
    let mitexto = document.querySelector(".mitexto");
    let inputtexto =document.querySelector(".inputtexto");
    
    let sus=document.querySelector(".sus");

    //Creamos un manejador para cada boton
    //que segun su textcontent haga una funcion y otra
    for (let boton of misBotones){
        switch (boton.textContent){
            case "Pon colores":
                boton.addEventListener("click",darColor);
                break;
            case "Coloca texto":
                boton.addEventListener("click",backwards);
                break;
        }
        
    }

    function darColor(){
       
    }

    //funcion que coja nuestro texto
    //lo recorremos inversamente
    //y lo añadimos al codigo HTML
    function backwards(){  
        let reverso="";
        let mi = new String(inputtexto.value);
        
        for (i=mi.length-1;i>=0;i--){
            reverso=reverso+mi[i];
        }

        mitexto.innerHTML+=`<p>${reverso}</p>`
    }
}
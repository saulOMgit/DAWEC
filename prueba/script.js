window.onload = function(){
    async function f(){
        const response= await fetch("https://jsonplaceholder.typicode.com/photos");
        const pagina= await response.json();

        imprimir(pagina);
    }
        function imprimir(pagina){
            

            for(let img of pagina){
                let titulo = document.createElement("p");
                let imagen = document.createElement("img");
                titulo.textContent=img.title;
                let avatar = new Image();
                avatar.src = img.thumbnailUrl;
                avatar.onload = function() {
                    console.log("Avatar... ", avatar.src)
                imagen.src = avatar.src;
                }
                
              imagen.setAttribute("alt",img.id);

                document.body.appendChild(titulo);
                document.body.appendChild(imagen);
            }
        }
       
    
    f();
}
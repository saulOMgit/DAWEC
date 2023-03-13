window.onload = function(){
    
    async function cargaDatos(){
        let response= await fetch("./scripts/personajes.json");
        let personajes= await response.json();

        imprimir(personajes);
    }
    cargaDatos();
    let contenedor=document.querySelector('.contenedor');
    let espacioimagenes=document.createElement("contenidoimagenes");
    espacioimagenes.classList.add("espacioimagenes");
    let myh1=document.querySelector('.titulo');
    contenedor.appendChild(espacioimagenes);
    var myRandom = Math.ceil(Math.random()*3);

    function imprimir(personajes){

        for (let personaje of personajes){
            if(personaje.id==myRandom){                
                myh1.textContent=`Elije a `+personaje.nombre;               
            }
            
            let mydiv=document.createElement("div");
            mydiv.classList.add("personaje");
            let miimagen=new Image();
            miimagen.src=personaje.ruta;
            miimagen.id=personaje.id;
            miimagen.alt=personaje.nombre;

            mydiv.appendChild(miimagen);
            espacioimagenes.appendChild(mydiv);
        }
        let mydiv=document.createElement("div");
        mydiv.classList.add("caja");
        contenedor.appendChild(mydiv);
        
        darFuncion();
    }

    function darFuncion(){
    const personajes = document.querySelectorAll('.personaje');
    
     for (let personaje of personajes){
         personaje.addEventListener("dragstart",dragStart);
     }

     function dragStart(e) {
         e.dataTransfer.setData('text/plain', e.target.id);
         console.log(e.target.alt);
     }

    const cajas = document.querySelectorAll('.caja');

     cajas.forEach(caja =>{
         caja.addEventListener('dragover', dragOver);
         caja.addEventListener('drop',drop);
     })
    function dragOver(e) {
         e.preventDefault();
         //esta no hace nada (no esta en css)
         e.target.classList.add('drag-over');
     }

    function drop(e) {
         e.target.classList.remove('drag-over');
          // Obtiene el elemento dragable
         const imagen = e.dataTransfer.getData('text/plain');
         console.log(imagen);
         if (imagen==myRandom){
             const draggable = document.getElementById(imagen);
             // Añade elemento dragable a destino sobre el que se suelta
             e.target.appendChild(draggable);
             e.target.classList.add("acierto");
            } else{
                e.target.classList.add("fallo");
                setTimeout(()=> e.target.classList.remove("fallo"),100);
            }      
            
        }
        // //Boton repetir
         document.querySelector('.repetir').addEventListener("click",Repetir);
    
        function Repetir(){
             window.location.reload();
         }

         //TOCA APENDEARLO
    }  


    // cajas.forEach(caja =>{


    //     caja.addEventListener('dragenter',dragEnter);
    //     caja.addEventListener('dragleave', dragLeave);
    // })
    
  
   

    // function dragEnter(e) {
    //     e.preventDefault();
    //     e.target.classList.add('drag-over');
    // }
    
    
    // function dragLeave(e) {
    //     e.target.classList.remove('drag-over');
    // }
    
}
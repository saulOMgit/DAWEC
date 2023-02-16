window.onload=function(){
    
    var map = new Map();

    async function recuperaValores(){

        const response = await fetch ("mercado.json");
        const frutas = await response.json();
        //Funcion
        tratarValores(frutas);

        for (const [nombre,cantidad] of map) {
        document.querySelector("ul").innerHTML+=`<li>${nombre} ${cantidad}</li> `;
         }
      
       
         
    }

    function tratarValores(frutas){

        //En este caso quiero recuperar primero en un mapa todos las claves, que seran
        for (let fruta of frutas) {
            let nuevovalor=0;
        // console.log(fruta.cantidad);
           //Si el nombre de la fruta no existe en el mapa la añado con su cantidad (primera)
            if(!(map.has(fruta.nombre))){
                map.set(fruta.nombre,fruta.cantidad);
                // document.body.innerHTML+=fruta.nombre+ ":"+fruta.cantidad + ", ";
            
            }else{
                let valor = map.get(fruta.nombre);
                 nuevovalor = valor+fruta.cantidad;
                 map.set(fruta.nombre,nuevovalor);
                 

            }
   
        }
  
    }

    recuperaValores();
    
} 
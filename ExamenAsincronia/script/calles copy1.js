window.onload = function () {
  //Obetenemos nuestro manejador de botón
  let myboton = document.querySelector(".empezar");
  //Le asignamos la funcion asincrona
  myboton.addEventListener("click", cargarDatos);

  //Cargamos los datos del json en asincrono
  async function cargarDatos() {
    const response = await fetch(
      "https://opendata.gijon.es/descargar.php?id=179&tipo=JSON"
    );
    const calles = await response.json();
    //Filtramos el json para que nos de las calles con el numero de accesos que hay en el input (Explicación mas tarde)
    let filtrado = calles.calles.calle.filter(numeroAccesos);
    //Llamamos a imprimir
    imprimir(filtrado);
  }

  let myul = document.createElement("ul");
  let numero = document.querySelector(".numero");
  let mydiv = document.querySelector(".datos");
  let mapita = new Map();
  let sett=new Set()
  //Ejercicio 1
  function imprimir(calles) {
    //Limpiamos los datos que pudiera haber
    mydiv.textContent = "";
    myul.textContent = "";
    let myEncabezado1 = document.createElement("h1");
    myEncabezado1.textContent = `Calles con mas de ${numero.value} accesos`;
    
    mydiv.appendChild(myEncabezado1);
    //Si no da ningun resultado lo reflejamos
    if (calles.length == 0) {
      let myp = document.createElement("p");
      myp.textContent = "Ninguna calle coincide con ese parametro de busqueda";
      mydiv.appendChild(myp);
    } else {
      //Si hay datos imprimimos los datos correspondientes
      for (let calle of calles) {
        let myli = document.createElement("li");

        myli.innerHTML = `Calle ${calle.nombre} - <span class="enfasis">Tipo</span> ${calle.tipo}, nº de accesos: <span class="enfasis">${calle.nÚmeroaccesos}</span>`;
        myul.appendChild(myli);

        
        sett.add(calle.tipo);

      }
      

      cargaPortales();
    }
    mydiv.appendChild(myul);
    document.body.appendChild(mydiv);
  }

  function numeroAccesos(calle) {
    //Si los accesos son superiores al numero introducido en el input, nos lo mete en el nuevo array
    return calle.nÚmeroaccesos >= numero.value;
  }

  //Ejercicio 2
  async function cargaPortales() {
    const response = await fetch(
      "https://opendata.gijon.es/descargar.php?id=33&tipo=JSON"
    );
    const portales = await response.json();

    imprimirNumPortales(portales);
  }

  //Incompleto pero con una muestra de lo que queria transmitir
  function imprimirNumPortales(portales) {
    let myEncabezado2 = document.createElement("h1");
    myEncabezado2.textContent = `Numero de Portales por tipo de calle`;
    mydiv.appendChild(myEncabezado2);

    
    let nuevoCont=0;
    contadorCalle = 0;
    contadorCtra = 0;
    contadorAvda = 0;
    contadorCamin = 0;
    for (let portal of portales.portales.portal) {
      if(sett.has(portal.tipo)){
        if (mapita.has(portal.tipo)){          
          let contador=mapita.get(portal.tipo);
          contador++;
          mapita.set(portal.tipo,contador);
        } else{
          mapita.set(portal.tipo,1);
        }
      }
      
    }
    let misCalles = document.createElement("p");
    
    for ([tipo,numero] of mapita){
      misCalles.innerHTML+=tipo+": "+numero+`<br/>`;
    }
    mydiv.appendChild(misCalles);
  }
};

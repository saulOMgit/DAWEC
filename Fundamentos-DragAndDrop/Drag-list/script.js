window.onload = function() {

    //Referencia al elemento destino
    const destino = document.querySelector('.destino');

    //Referencia a elementos li -> NodeList
    let items = document.querySelectorAll(".item");

    //Asignamos manejadores de eventos Drag and Drop a origen
    for (let item of items) {
        item.addEventListener("dragstart", dragStart);
        item.addEventListener("dragend", dragEnd);
    }

    //Asignamos manejadores de eventos Drag and Drop a destino
    destino.addEventListener("dragenter", dragEnter);
    destino.addEventListener("dragover", dragOver);
    destino.addEventListener("dragleave", dragLeave);
    destino.addEventListener("drop", drop);

    //Funciones manejadoras de eventos
    function dragStart(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);

        // ev.dataTransfer.setData('text/plain', ev.target.id);
        ev.target.classList.add("item-seleccionado");
    }

    function dragEnter(ev) {
        console.log("dragenter....", ev.target)
    }

    function dragEnd(ev) {
        ev.target.classList.remove("item-seleccionado");
    }

    function dragOver(ev) {
        ev.preventDefault(); //Para convertir elemento en destino de colocación válido.
        ev.target.classList.add("item-over");
    }

    function dragLeave(ev) {
        ev.target.classList.remove("item-over");
    }

    function drop(ev) {
        console.log("drop...  ", ev.target)

        let id = ev.dataTransfer.getData('text/plain');
        let elemento = document.querySelector(`#${id}`);
        elemento.classList.remove("item-seleccionado");
        ev.target.classList.remove("item-over");

        if (ev.target.classList.contains("destino")) {
            ev.target.children[0].appendChild(elemento);
        } else {
            console.log(destino, ev.target, elemento)
            destino.children[0].insertBefore(elemento, ev.target);
        }
    }

}
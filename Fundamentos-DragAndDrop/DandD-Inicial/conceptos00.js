window.onload = function() {


    //Eventos para elemento origen
    let div = document.querySelector("div");

    let dragStart = (ev) => {
        console.log("dragstart...", ev.target);
    }

    let drag = (ev) => {
        console.log("drag...");
    }

    let dragEnd = (ev) => {
        console.log("dragEnd...");
    }
    div.addEventListener("dragstart", dragStart);
    div.addEventListener("drag", drag);
    div.addEventListener("dragend", dragEnd);

    //******************************************* */   
    //Eventos para destino
    const destinos = document.querySelectorAll('.destino');

    for (let destino of destinos) {
        destino.addEventListener('dragenter', dragEnter)
        destino.addEventListener('dragover', dragOver);
        destino.addEventListener('dragleave', dragLeave);
        destino.addEventListener('drop', drop);
    };

    function dragEnter(e) {
        console.log("dragenter...", this);
    }

    function dragOver(e) {
        e.preventDefault();
        console.log("dragover...");
    }

    function dragLeave(e) {
        console.log("drageleave...");
    }

    function drop(e) {
        console.log("drop...", this);
    }

}
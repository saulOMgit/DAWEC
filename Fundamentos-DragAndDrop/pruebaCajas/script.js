window.onload = function(){
    const personajes = document.querySelectorAll('.personaje');
    
    for (let personaje of personajes){
        personaje.addEventListener("dragstart",dragStart);
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    const cajas = document.querySelectorAll('.caja');

    cajas.forEach(caja =>{
        caja.addEventListener('dragenter',dragEnter);
        caja.addEventListener('dragover', dragOver);
        caja.addEventListener('dragleave', dragLeave);
        caja.addEventListener('drop',drop);
    })

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }
    
    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }
    
    function drop(e) {
        e.target.classList.remove('drag-over');
    
        // Obtiene el elemento dragable
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
    
        // Añade elemento dragable a destino sobre el que se suelta
        e.target.appendChild(draggable);
    }
}
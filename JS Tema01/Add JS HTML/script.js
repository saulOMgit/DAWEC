window.onload = function() {
    document.querySelector("button").addEventListener("click", cambiaColor);

    function cambiaColor() {
        let parrafo = document.querySelector("p");
        parrafo.style.color = "orange";
        parrafo.style.fontSize = "3em";
    }
}
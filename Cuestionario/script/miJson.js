let preguntas = [
    
{
    "categoria":"gaming",
    "pregunta":[
            {
                "pregunta":"¿En que videojuego aparece The Ashen One?",
                "respuestas":["Dark Souls","Dark Souls 2", "Among Us", "Dark Souls 3"]
            },
            {
                "pregunta":"¿Cual es el mejor videojuego de 2017?",
                "respuestas":["TloZ: Botw","Persona 5", "NieR: Automata", "Yakuza 0"]
            }
        ]
},
{
    "categoria":"anime",
    "pregunta":[
            {
                "pregunta":"¿Quien dice la inspiradora frase Tatakae?",
                "respuestas":["Armin","Perry el Ornitorrinco","Ereh", "Zac Effron"]
            },
            {
                "pregunta":"¿Cual es el mejor anime ever?",
                "respuestas":["FMA: Brotherhood","Shingeki no Kyojin","Kimetsu no Yaiba", "Pingu"]
            }
        ]
}
]




for (let pregunta of preguntas){
    console.log("Categoria "+pregunta.categoria);
   for (let categoria of pregunta.pregunta){
    console.log(categoria.pregunta)
    for (let respuesta of categoria.respuestas){
        console.log(respuesta);
    }        
   }
    
}
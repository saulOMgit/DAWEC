let preguntas = [
    //creamos un objeto
{
    "categoria":"gaming",
    //que a su vez tiene otro objeto
    "pregunta":[
            {
                "modo":"simple",
                "pregunta":"¿En que videojuego aparece The Ashen One?",
                "respuestas":[{
                    "respuesta":"Dark Souls","correcta":""},
                    {"respuesta":"Dark Souls 2","correcta":""},
                    {"respuesta":"Among Us","correcta":""},
                    {"respuesta":"Dark Souls 3","correcta":"true"}]
            },
            {
                "modo":"simple",
                "pregunta":"¿Cual es el mejor videojuego de 2017?",
                "respuestas":[{
                    "respuesta":"TloZ: Botw","correcta":""},
                    {"respuesta":"Persona 5","correcta":"true"},
                    {"respuesta":"NieR: Automata","correcta":""},
                    {"respuesta":"Yakuza 0","correcta":""}]
            },
            {
                "modo":"multi",
                "pregunta":"¿En que videojocs aparece Super Mario?",
                "respuestas":[{
                    "respuesta":"TloZ: Botw","correcta":""},
                    {"respuesta":"Super Mario Land","correcta":"true"},
                    {"respuesta":"Smash Bros","correcta":"true"},
                    {"respuesta":"Mario Party","correcta":"true"}]
            }
        ]
},
{
    "categoria":"anime",
    "pregunta":[
            {
                "modo":"simple",
                "pregunta":"¿Quien dice la inspiradora frase Tatakae?",
                "respuestas":[{
                    "respuesta":"Armin","correcta":""},
                    {"respuesta":"Perry el Ornitorrinco","correcta":""},
                    {"respuesta":"Ereh","correcta":"true"},
                    {"respuesta":"Zac Effron","correcta":""}]
            },
            {
                "modo":"simple",
                "pregunta":"¿Cual es el mejor anime ever?",
                "respuestas":[{"respuesta":"FMA: Brotherhood","correcta":"true"},
                {"respuesta":"Shingeki no Kyojin","correcta":""},
                {"respuesta":"Kimetsu no Yaiba","correcta":""},
                {"respuesta":"Pingu","correcta":""}]
            },
            {
                "modo":"multi",
                "pregunta":"¿Cuales de estos animes esta animado por Mappa?",
                "respuestas":[{"respuesta":"FMA: Brotherhood","correcta":""},
                {"respuesta":"Shingeki no Kyojin s4","correcta":""},
                {"respuesta":"Kimetsu no Yaiba","correcta":""},
                {"respuesta":"Danse Danse Danceur","correcta":"true"}]
            }
        ]
}
]

// let cuestionario=elemen
//tenemos que iterar tres veces porque tenemos 2 objetos y un array

// for (let pregunta of preguntas){
//     console.log("Categoria "+pregunta.categoria);
//    for (let categoria of pregunta.pregunta){
//     console.log(categoria.pregunta)
//     for (let respuesta of categoria.respuestas){
//         console.log(respuesta);
//     }        
//    }    
// }


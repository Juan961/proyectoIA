// Se agrega el evento "DOMContentLoaded" para que cargue primero los elementos del DOM y apartir de ellos que la IA los analice

document.addEventListener("DOMContentLoaded", function(event) {

    // Se le asgina un valor al boton para detectar cuando es presionado

    const boton = document.getElementById('boton')

    // Se le asgina un valor a los elementos HTML para despues cambiarlos dependiendo de los resultados
    
    var mensajePositivo = document.getElementById('app-presentacion-positivo')
    var mensajeNegativo = document.getElementById('app-presentacion-negativo')
    var mensajeNeutral = document.getElementById('app-presentacion-neutral')

    // Se le asgina una variable a las materias para despues analizarlas con la IA
    
    var nombre, materiaEspañol, materiaMatematicas, materiaIngles, materiaQuimica, materiaFisica

    // Se le asgina una variable a las futuras respuestas de la IA
    
    var resEspañol, resMatematicas, resIngles, resQuimica, resFisica

    // Se añade un event listener para escuchar cuando se presiona el boton
    
    boton.addEventListener('click', () => {

        // Se adquieren los valores de los inputs y se les asgina a una variable
    
        nombre = document.getElementById("Nombre").value
        materiaEspañol = document.getElementById("opinionEspañol").value
        materiaMatematicas = document.getElementById("opinionMatematicas").value
        materiaIngles = document.getElementById("opinionIngles").value
        materiaQuimica = document.getElementById("opinionQuimica").value

        // Por medio de un metodo POST se hace la peticion al servicio cognitivo de azure para que procese los datos y nos devuelva la respuesta de la IA
    
        axios({
            method:'POST',
            url:'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/sentiment',
            headers:{
                'Ocp-Apim-Subscription-Key': '8b4c7829af844bc699425c01e131246a',
                'Content-Type': 'application/json'
            },
            data:{
                "documents": [
                    {
                        "language": "es",
                        "id": "1",
                        "text": materiaEspañol
                    },
                    {
                        "language": "es",
                        "id": "2",
                        "text": materiaMatematicas
                    },
                    {
                        "language": "es",
                        "id": "3",
                        "text": materiaIngles
                    },
                    {
                        "language": "es",
                        "id": "4",
                        "text": materiaQuimica
                    },
                    {
                        "language": "es",
                        "id": "5",
                        "text": materiaFisica
                    }
                ]
            }
        }).then(res => {

            // Se le asgina una variable a las futuras respuestas de la IA

            console.log(res.data.documents[0].sentiment)
            console.log(res.data.documents[1].sentiment)
            console.log(res.data.documents[2].sentiment)
            console.log(res.data.documents[3].sentiment)

            resEspañol = res.data.documents[0].sentiment
            resMatematicas = res.data.documents[0].sentiment
            resIngles = res.data.documents[0].sentiment
            resQuimica = res.data.documents[0].sentiment

        })
        .catch(error => {
            console.log(error)
        })
        
        function mostrarDatos(callback) {
            document.getElementById('app-respuesta-definitiva').style.display = 'block';

            // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

            if(resEspañol === 'positive'){
                mensajePositivo.value += "español"
            }
            else if(resEspañol === 'negative'){
                mensajeNegativo.value += "español"
            }
            else {
                mensajeNeutral.value += "español"
            }

            // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

            if(resEspañol === 'positive'){
                mensajePositivo.value += "español"
            }
            else if(resEspañol === 'negative'){
                mensajeNegativo.value += "español"
            }
            else {
                mensajeNeutral.value += "español"
            }

            // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

            if(resEspañol === 'positive'){
                mensajePositivo.value += "español"
            }
            else if(resEspañol === 'negative'){
                mensajeNegativo.value += "español"
            }
            else {
                mensajeNeutral.value += "español"
            }

            // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

            if(resEspañol === 'positive'){
                mensajePositivo.value += "español"
            }
            else if(resEspañol === 'negative'){
                mensajeNegativo.value += "español"
            }
            else {
                mensajeNeutral.value += "español"
            }

            mensajePositivo.value += "; "
            mensajeNeutral.value += "; "
            mensajeNeutral.value = "; Muchas gracias por utilizar nuestros servicios."
        }

        mostrarDatos()
    })
})
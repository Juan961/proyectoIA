// Se agrega el evento "DOMContentLoaded" para que cargue primero los elementos del DOM y apartir de ellos que la IA los analice

document.addEventListener("DOMContentLoaded", function(event) {

    // Se le asgina un valor al boton para detectar cuando es presionado

    const boton = document.getElementById('boton')

    // Se le asgina un valor a los elementos HTML para despues cambiarlos dependiendo de los resultados
    
    var mensajePositivo = document.getElementById('app-presentacion-positivo')
    var mensajeNegativo = document.getElementById('app-presentacion-negativo')
    var mensajeNeutral = document.getElementById('app-presentacion-neutral')

    // Se le asgina una variable a las materias para despues analizarlas con la IA
    
    var nombre, materiaEspañol, materiaMatematicas, materiaIngles, materiaQuimica, materiaFisica, materiaEduFisica, materiaTecno, materiaArtes

    // Se le asgina una variable a las futuras respuestas de la IA
    
    var resEspañol, resMatematicas, resIngles, resQuimica, resFisica, resEduFisica, resTecno, resArtes

    function mostrarDatos(callback) {
        document.getElementById('app-respuesta-definitiva').style.display = 'block';

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

        if(resEspañol === 'positive'){
            mensajePositivo.innerHTML += "Español "
        }
        else if(resEspañol === 'negative'){
            mensajeNegativo.innerHTML += "Español "
        }
        else if(resEspañol === 'neutral'){
            mensajeNeutral.innerHTML += "Español "
        }

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de matematicas

        if(resMatematicas === 'positive'){
            mensajePositivo.innerHTML += "Matematicas "
        }
        else if(resMatematicas === 'negative'){
            mensajeNegativo.innerHTML += "Matematicas "
        }
        else if(resMatematicas === 'neutral'){
            mensajeNeutral.innerHTML += "Matematicas "
        }

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de ingles

        if(resIngles === 'positive'){
            mensajePositivo.innerHTML += "Ingles "
        }
        else if(resIngles === 'negative'){
            mensajeNegativo.innerHTML += "Ingles "
        }
        else if(resIngles === 'neutral'){
            mensajeNeutral.innerHTML += "Ingles "
        }

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de quimica

        if(resQuimica === 'positive'){
            mensajePositivo.innerHTML += "Quimica "
        }
        else if(resQuimica === 'negative'){
            mensajeNegativo.innerHTML += "Quimica "
        }
        else {
            mensajeNeutral.innerHTML += "Quimica "
        }

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de fisica

        if(resFisica === 'positive'){
            mensajePositivo.innerHTML += "Fisica "
        }
        else if(resFisica === 'negative'){
            mensajeNegativo.innerHTML += "Fisica "
        }
        else if(resFisica === 'neutral'){
            mensajeNeutral.innerHTML += "Fisica "
        }

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

        if(resEduFisica === 'positive'){
            mensajePositivo.innerHTML += "Educacion Fisica "
        }
        else if(resEduFisica === 'negative'){
            mensajeNegativo.innerHTML += "Educacion Fisica "
        }
        else if(resEduFisica === 'neutral'){
            mensajeNeutral.innerHTML += "Educacion Fisica "
        }

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

        if(resTecno === 'positive'){
            mensajePositivo.innerHTML += "Tecnologia "
        }
        else if(resTecno === 'negative'){
            mensajeNegativo.innerHTML += "Tecnologia "
        }
        else if(resTecno === 'neutral'){
            mensajeNeutral.innerHTML += "Tecnologia "
        }

        // Analizando la respuesta de la IA para mostrarla en pantalla en la materia de español

        if(resArtes === 'positive'){
            mensajePositivo.innerHTML += "Artes "
        }
        else if(resQuimica === 'negative'){
            mensajeNegativo.innerHTML += "Artes "
        }
        else if(resArtes === 'neutral'){
            mensajeNeutral.innerHTML += "Artes "
        }

    }

    // Se añade un event listener para escuchar cuando se presiona el boton
    
    boton.addEventListener('click', () => {

        // Se adquieren los valores de los inputs y se les asgina a una variable
    
        nombre = document.getElementById("Nombre").value
        materiaEspañol = document.getElementById("opinionEspañol").value
        materiaMatematicas = document.getElementById("opinionMatematicas").value
        materiaIngles = document.getElementById("opinionIngles").value
        materiaQuimica = document.getElementById("opinionQuimica").value
        materiaFisica = document.getElementById("opinionFisica").value
        materiaEduFisica = document.getElementById("opinionEduFisica").value
        materiaTecno = document.getElementById("opinionTecno").value
        materiaArtes = document.getElementById("opinionArtes").value

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
                    },
                    {
                        "language": "es",
                        "id": "6",
                        "text": materiaEduFisica
                    },
                    {
                        "language": "es",
                        "id": "7",
                        "text": materiaTecno
                    },
                    {
                        "language": "es",
                        "id": "8",
                        "text": materiaArtes
                    }
                ]
            }
        }).then(res => {

            // Se le asgina una variable a las futuras respuestas de la IA

            console.log("Español = " + res.data.documents[0].sentiment)
            console.log("Matematicas = " + res.data.documents[1].sentiment)
            console.log("Ingles = " + res.data.documents[2].sentiment)
            console.log("Quimica = " + res.data.documents[3].sentiment)
            console.log("Fisica = " + res.data.documents[4].sentiment)
            console.log("EduFisica = " + res.data.documents[5].sentiment)
            console.log("Tecno = " + res.data.documents[6].sentiment)
            console.log("Artes = " + res.data.documents[7].sentiment)

            resEspañol = res.data.documents[0].sentiment
            resMatematicas = res.data.documents[1].sentiment
            resIngles = res.data.documents[2].sentiment
            resQuimica = res.data.documents[3].sentiment
            resFisica = res.data.documents[4].sentiment
            resEduFisica = res.data.documents[5].sentiment
            resTecno = res.data.documents[6].sentiment
            resArtes = res.data.documents[7].sentiment

            mostrarDatos()

        })
        .catch(error => {
            console.log(error)
        })
            
    })
})
// Ejemplo de uso en consola

const axios = require('axios')

const prompt = require('prompt-sync')();

var materiaEspañol = prompt("Ingrese un breve descripción sobre la materia de español: ")
var materiaMatematicas = prompt("Ingrese un breve descripción sobre la materia de español: ")
var materiaIngles = prompt("Ingrese un breve descripción sobre la materia de ingles: ")
var materiaQuimica = prompt("Ingrese un breve descripción sobre la materia de quimica: ")
var materiaFisica = prompt("Ingrese un breve descripción sobre la materia de fisica: ")

var body ={
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

var direccion = 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/sentiment'

axios.post(direccion, body, {
    headers:{
        'Ocp-Apim-Subscription-Key': '8b4c7829af844bc699425c01e131246a',
        'Content-Type': 'application/json'
    }
})
.then(repuesta => {
    console.log(repuesta.data)
})
.catch(error => console.log(error))
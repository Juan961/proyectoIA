const boton = document.getElementById('boton')

var nombre, materiaEspañol, materiaMatematicas, materiaIngles, materiaQuimica, materiaFisica


boton.addEventListener('click', () => {

    nombre = document.getElementById("Nombre").value
    materiaEspañol = document.getElementById("opinionEspañol").value
    materiaMatematicas = document.getElementById("opinionMatematicas").value
    materiaIngles = document.getElementById("opinionIngles").value
    materiaQuimica = document.getElementById("opinionQuimica").value
    materiaFisica = document.getElementById("opiniionFisica").value

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
                    "text": materiaFisica
                },
                {
                    "language": "es",
                    "id": "3",
                    "text": materiaQuimica
                },
                {
                    "language": "es",
                    "id": "4",
                    "text": materiaMatematicas
                }
            ]
        }
    }).then(res=>console.log(res))
})

/*
var body = {
    "documents": [
        {
            "language": "es",
            "id": "1",
            "text": materiaEspañol
        },
        {
            "language": "es",
            "id": "2",
            "text": materiaFisica
        },
        {
            "language": "es",
            "id": "3",
            "text": materiaQuimica
        },
        {
            "language": "es",
            "id": "4",
            "text": materiaMatematicas
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

*/

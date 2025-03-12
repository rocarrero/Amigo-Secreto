// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. Aquí 
// deberás desarrollar la lógica para resolver el problema.


let nombreAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre == "") {

        alert ("error:  Por favor,  inserte un nombre.");
        
    } else {
        nombreAmigos.push(nombre);
        document.getElementById('amigo').value ="";
        document.getElementById('amigo').focus();

        document.getElementById('listaAmigos').innerHTML = "";
        for (let i = 0; i < nombreAmigos.length; i++) {
            let nuevoElemento = document.createElement('li');
            nuevoElemento.textContent = nombreAmigos[i];
            document.getElementById('listaAmigos').appendChild(nuevoElemento);
        }
    }
}

function sortearAmigo() {
    if (nombreAmigos == "") {
        alert("no hay amigos para sortear")

    } else {

        let indiceAleatorio = Math.floor(Math.random()* nombreAmigos.length);
        let amigoSorteado = nombreAmigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = amigoSorteado;
        document.getElementById('listaAmigos').innerHTML = "";
    }
}
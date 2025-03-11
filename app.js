// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const nuevoAmigo = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const resultado = document.querySelector('#resultado');

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    
    if (nuevoAmigo.value.trim() === '') {
        resultado.textContent = 'No hay nombres de amigos en la lista para sortear.';
        return;
    } else {
        resultado.textContent = '';
    }
    
    amigos.push(nuevoAmigo.value);
    listaAmigos.textContent = '';
    nuevoAmigo.value = '';
    amigos.forEach(amigo => {
        const amigoElemento = document.createElement('li');
        amigoElemento.textContent = amigo;
        listaAmigos.appendChild(amigoElemento);
    });

    console.log('Amigos:', amigos);

}
function sortearAmigo() {
    limpiarResultado();

    if (amigos.length === 0) {
        resultado.textContent = 'No hay nombres de amigos en la lista para sortear.';
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const amigoSecretoElemento = document.createElement('li');
    amigoSecretoElemento.textContent = amigoSecreto;
    resultado.appendChild(amigoSecretoElemento);

    //amigos = amigos.filter(amigo => amigo !== amigoSecreto);

    amigos.splice(0, amigos.length);

    limpiarAmigos(); // Limpia la lista del HTML al terminar, despues de haber seleccionado el amigo secreto.

    console.log('Amigos restantes:', amigos);

}

function limpiarAmigos() {
    const amigosElementos = document.querySelectorAll('#listaAmigos li');
    amigosElementos.forEach(amigoElemento => {
        amigoElemento.remove();
    });

}

function limpiarResultado() {
    const resultado = document.querySelector('#resultado');
    resultado.textContent = '';
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    const amigo = document.querySelector('#amigo');
    const amigos = document.querySelector('#listaAmigos');
    const resultado = document.querySelector('#resultado');
    
    if (amigo.value.trim() === '') {
        resultado.textContent = 'No hay nombres de amigos en la lista para sortear.';
        return;
    } else {
        resultado.textContent = '';
    }
    
    const amigoNuevo = document.createElement('li');
    amigoNuevo.textContent = amigo.value;
    amigos.appendChild(amigoNuevo);
    amigo.value = '';
}
function sortearAmigo() {
    limpiarResultado();
    const amigos = document.querySelectorAll('#listaAmigos li');
    const resultado = document.querySelector('#resultado');

    if (amigos.length === 0) {
        resultado.textContent = 'No hay nombres de amigos en la lista para sortear.';
        return;
    }else {
        resultado.textContent = '';
    }

    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = 'El amigo secreto es: ' + amigoSeleccionado.textContent;

    limpiarAmigos(); // Limpia la lista después de seleccionar el amigo secreto
}

function limpiarAmigos() {
    const amigos = document.querySelectorAll('#listaAmigos li');
    amigos.forEach(amigo => {
        amigo.remove();
    });
}

function limpiarResultado() {
    const resultado = document.querySelector('#resultado');
    resultado.textContent = '';
}
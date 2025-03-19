const entradaAmigo = document.querySelector("#amigo");
const listaDeAmigos =[];
const ulListaAmigos = document.querySelector("#listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    if (entradaAmigo.value.trim() === "") {
        alert("Por favor, ingresa un nombre antes de añadir.");
        return;
    }
    listaDeAmigos.push(entradaAmigo.value);
    ulListaAmigos.innerHTML += `<li>${entradaAmigo.value}</li>`;
    entradaAmigo.value = "";
}

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

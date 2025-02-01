// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

nombresAmigos = []; //Array que contendra los nombre de amigos
let resultado = document.getElementById("resultado");
let cajaNombre = document.getElementById("amigo");
let listado = document.getElementById("listaAmigos");
let buttonSortear = document.getElementById("buttonSortear");

function agregarAmigo(){
    //listado.innerHTML = "";
    //resultado.innerHTML = "";
    nombre = cajaNombre.value;
    if(nombre != ""){
        nombresAmigos.push(nombre);
        cajaNombre.value = "";
        cajaNombre.focus();
        actualizarListaAmigos();
        buttonSortear.disable = false;
    }else{
        alert("ingrese un nombre valido");
    }
    //console.log(nombresAmigos);
}

function actualizarListaAmigos(){

    listado.innerHTML = nombresAmigos;
}

function sortearAmigo(){
    let numeroSorteo = Math.floor(Math.random()*nombresAmigos.length)+0;
    
    resultado.innerHTML = `El amigo secreto es: ${nombresAmigos[numeroSorteo]}`
    //nombresAmigos = [];
}
function reiniciar(){
    nombresAmigos = []; //Array que contendra los nombre
    listado.innerHTML = "";
    resultado.innerHTML = "";
}
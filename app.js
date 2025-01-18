// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array de amigos


//funcion que captura la entrada del input enviado
//@return {string} nombre
function capturarEntrada(elemento)
{
    return document.getElementById(elemento);
}

function limpiarElementoUl(elemento)
{
    document.getElementById(elemento).innerHTML = "";
}


//funcion que limpia la entrada de imput pasado como parametro
//@param {string} nombre
function limpiarEntrada(nombre) {
    document.getElementById(nombre).value = ""; 
}


//funcion que valida que el nombre no este vacio
function validarNombre(nombre)
{    
    if (nombre)
        return true;
    else
    {
        alert("Por favor, inserte un nombre.");
        return false;
    }
}


//funcion que busca si un nombre ya esta en la lista de amigos
//funcion no solicitada en el desafio
function buscarNombreRepetido(arregloNombre, nombre)
{       
    
    if (arregloNombre.includes(nombre)) {
        alert(`El nombre ${nombre} ya esta en la lista de amigos`);
        return true;
    }
    return false;
}


//funcion que crea la lista de amigos
function crearListaAmigos()
{
    let lista = document.getElementById("listaAmigos");  
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        //li.appendChild(document.createTextNode(amigos[i]));
        li.innerHTML =amigos[i];
        lista.appendChild(li);
    }
}


//funcion que agregar un amigo a la lista de amigos
function agregarAmigo() {
    //capturar nombre y se limpia de espacios en blanco
    let nombre = capturarEntrada("amigo").value.trim();    
    //validar que el nombre no este vacio    
    limpiarEntrada("amigo");    
    //validar que el nombre no este repetido en la lista de amigos y que no este vacio
    if ((!buscarNombreRepetido(amigos, nombre)) && (validarNombre(nombre)) )
    {           
       amigos.push(nombre);       
       limpiarElementoUl("listaAmigos");
       crearListaAmigos();
       limpiarElementoUl("resultado");
    }
    return;
    
}

function sortearAmigo()
{
    if (amigos.length < 2){        
        alert("Debe ingresar al menos el nombre de dos amigos");
        return;

    }
    else
    {
        limpiarElementoUl("listaAmigos");
        let lista = document.getElementById("resultado");
        limpiarElementoUl("resultado");    
        let li = document.createElement("li");
        //Yo lo haria asi pero el ejercicio pide que se haga con innerHTML
        //li.appendChild(document.createTextNode(`El amigo secreto es: ${amigos[Math.floor(Math.random() * amigos.length)]}`));
        li.innerHTML = `El amigo secreto es: ${amigos[Math.floor(Math.random() * amigos.length)]}`;
        lista.appendChild(li);
        amigos = [];
    }
}

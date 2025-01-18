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
        alert("Debe ingresar un nombre valido/no vacio");
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
    
    /* for (let i = 0; i < arregloNombre.length; i++) {        
        if (arregloNombre[i].toUpperCase() === nombre.toUpperCase()) {         
            return true;           
        }
    } */
    return false;
}


//funcion que crea la lista de amigos
function crearListaAmigos()
{
    let lista = document.getElementById("listaAmigos");
    limpiarElementoUl("listaAmigos");
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(li);
    }
}


//funcion que agregar un amigo a la lista de amigos
function agregarAmigo() {
    //capturar nombre y se limpia de espacios en blanco
    let nombre = capturarEntrada("amigo").value.trim();    
    //validar que el nombre no este vacio    
    limpiarEntrada("amigo");    
    if ((buscarNombreRepetido(amigos, nombre)) || (!validarNombre(nombre))  )
    {           
        return;
    }
    else{       
       amigos.push(nombre);       
       crearListaAmigos();
       limpiarElementoUl("resultado");
    }
    
}

function sortearAmigo()
{
    if (amigos.length < 2)
        return alert("Debe ingresar al menos dos amigos");
    else
    {
        limpiarElementoUl("listaAmigos");
        let lista = document.getElementById("resultado");
        limpiarElementoUl("resultado");    
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`El amigo secreto es: ${amigos[Math.floor(Math.random() * amigos.length)]}`));
        lista.appendChild(li);
        amigos = [];
    }
}
"use strict";

////////////////////////////////////////////////////////
//////////       FUNTIONS      /////////////////////////
////////////////////////////////////////////////////////
// Definir variables
let perros = [];
//let btnAnyadir = document.getElementById("anyadirPerro");
//let btnOrdenar = document.getElementById("ordenarPorEntrada");
//let btnOrdenarEdad = document.getElementById("ordenarPorEdad");
//let btnOrdenarRaza = document.getElementById("ordenarPorRaza");

// Constructor
function Perro(nombre,edad,raza){
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
}

Perro.prototype.mostrarPerro = function(){return 'Perro: ${this.nombre} ${this.edad} ${this.raza}'};

// Añadir un perro al array de perros
function anyadirPerro(){
    let nombre = document.getElementById("nombrePerro").value.trim();
    let edad = document.getElementById("edadPerro").value.trim();
    let raza = document.getElementById("razaPerro").value.trim();

    let newPerro = new Perro(nombre,edad,raza);
    perros.push(newPerro);

    // Comprobación
    alert("perro añadido con éxito");

    
}

// Ordenaciones
function ordenarPorInsercion(){
    let divLista = document.getElementById("divLista");
    let listaHTML = '';
    listaHTML+='<ul>';
    perros.forEach(perro => {listaHTML += '<li>'+perro.mostrarPerro+'</li>'});
    listaHTML += '</ul>';
    divLista.innerHTML = listaHTML;
}

function ordenarPorEdad(){
    let perrosOrdenado = perros.toSorted((a,b) => a.edad - b.edad);

    let divLista = document.getElementById("divLista");
    let listaHTML = '';
    listaHTML+='<ol>';
    perros.forEach(perro => {listaHTML += '<li>'+perro.mostrarPerro+'</li>'});
    listaHTML += '</ol>';
    divLista.innerHTML = listaHTML;
}

function ordenarPorRaza(){
    let perrosOrdenado = perros.toSorted((a,b) => a.raza - b.raza);

    let divLista = document.getElementById("divLista");
    let listaHTML = '';
    listaHTML+='<ul>';
    perros.forEach(perro => {listaHTML += '<li>'+perro.mostrarPerro+'</li>'});
    listaHTML += '</ul>';
    divLista.innerHTML = listaHTML;
}

////////////////////////////////////////////////////////
//////////        MAIN         /////////////////////////
////////////////////////////////////////////////////////
//btnAnyadir.addEventListener("click", anyadirPerro);
//btnOrdenar.addEventListener("click", ordenarPorInsercion);
//btnOrdenarEdad.addEventListener("click", ordenarPorEdad);
//btnOrdenarRaza.addEventListener("click", ordenarPorRaza);
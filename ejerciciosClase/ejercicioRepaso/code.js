"use strict";

///////////////////////////////////////////
/////    FUNCTION 
///////////////////////////////////////////
/**
 * Calcula el volumen de una esfera
 */
function getPH(){
    //1.- Recuperamos el input donde el usuario  introduce el ph de la piscina
    let phAgua = Number(txtPH.value);
    let resultado;
    if (phAgua>6.5 && phAgua<=8.5){
        resultado="ph neutro"; 
    }
    else if (phAgua>8.5 && phAgua<=11){
        resultado="ligeramente alcalino";
    }
    else if (phAgua>11){
        resultado="muy alcalino";
    }
    else if (phAgua>=3.5 && phAgua<=6.5){
        resultado="ligeramente ácido";
    }
    else if (phAgua<3.5){
        resultado="muy ácido";
    }
    
    //2.- Mostramos el resultado
    divResultado.innerHTML = `El nivel ph del agua es <strong>${resultado}</strong>`
}



//////////////////////////////////////////
/////    MAIN
//////////////////////////////////////////

//1.- Recuperamos las etiquetas que vamos a utilizar (llamalas aqui antes que en la funcion)
let btnCalcular = document.querySelector("#btnCalcular");
let txtPH = document.querySelector("#txtPH");
let divResultado = document.getElementById("divResultado");

//2.- Asignamos un escuchador de eventos, cuando se produzca el evento click
//    
btnCalcular.addEventListener("click", getPH);
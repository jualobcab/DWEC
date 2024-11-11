"use strict";

///////////////////////////////////////////
/////    FUNCTION 
///////////////////////////////////////////
/**
 * Calcula el volumen de una esfera
 */
function calcularVolumenEsfera(){
    //1.- Recuperamos el input donde el usuario  introduce el radio de la esfera
    let txtRadio = document.getElementById("txtRadio");
    let radio = txtRadio.value;
    //alert("El radio de la esfera es " + radio);
    
    //2.- Calculamos el volumen de la esfera
    let volumenEsfera = 4/3*Math.PI*radio**3;
    //alert("El volumen de la esfera es " + volumenEsfera);

    //4.- Mostramos el resultado
    let divResultado = document.getElementById("divResultado");
    divResultado.innerHTML = `El volumen de la esfera de radio ${radio} es <strong>${volumenEsfera.toFixed(2)}</strong>`
}



//////////////////////////////////////////
/////    MAIN
//////////////////////////////////////////

//1.- Recuperamos las etiquetas que vamos a utilizar
let btnCalcular = document.getElementById("btnCalcular");

//2.- Asignamos un escuchador de eventos, cuando se produzca el evento click
//    
btnCalcular.addEventListener("click", calcularVolumenEsfera);
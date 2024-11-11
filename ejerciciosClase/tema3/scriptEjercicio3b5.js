var flores = ["margarita", "rosa", "clavel", "cristantemo", "narciso", "geranio", "lirio", "Azalea", "Tulipán", "Orquídea", "Girasol", "Gladiolo", "Jazmín", "Ciclamen", "Amapola"];

// Creamos una funcion para elegir una flor de manera aleatoria
function florRandom(){

    // Utilizamos el objeto MATH para elegir una flor de manera random aprovechando
    // su fincion .Random
    var florElegida = flores[Math.floor(Math.random()*flores.length)];

    var registroFlores=JSON.parse(localStorage.getItem('flores'));
    
    // CONTAR
    if (registroFlores[florElegida]){
        registroFlores[florElegida]++;
    }
    else {
        registroFlores[florElegida]=1;
    }

    // Guardamos el registro de flores
    localStorage.setItem('flores', JSON.stringify(registroFlores));

    // Mostramos la flor elegida
    document.getElementById(florElegida).innerText = 'Flor elegida: '+florElegida;
}
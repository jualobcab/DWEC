let arrayCoches = ['Nissan', 'Volkswagen', 'BMW', 'Opel', 'Alpha', 'Toyota', 'Ford'];
let vocales = ["a", "e", "i", "o", "u"];

// Funciones
function contadorVocales(array) {
    let res = [];
    array.forEach(marca => {
        vocales = 0
        marca.toLowerCase().toString().forEach(letra => {
            if (letra in vocales) { vocales++; }
        }
        )
    });
}

function ordenarMarcas(array){
    return array.sort()
}

function eliminarDuplicados(array){
    array
}
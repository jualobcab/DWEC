// Inicializamos un array para almacenar las cuentas
let cuentas = [];

// Función para leer datos de las cuentas
function leerCuentas() {
    while (true) {
        // Leer el número de cuenta
        let numeroCuenta = parseFloat(prompt("Ingrese el número de cuenta (ingrese un número negativo para terminar):"));
        
        // Si el número de cuenta es negativo, terminamos la lectura
        if (numeroCuenta < 0) break;
        
        // Leer el nombre del cliente
        let nombreCliente = prompt("Ingrese el nombre del cliente:");
        
        // Leer el saldo actual
        let saldoActual = parseFloat(prompt("Ingrese el saldo actual:"));
        
        // Almacenar la cuenta como un array
        cuentas.push([numeroCuenta, nombreCliente, saldoActual]);
    }
}

// Función para procesar y mostrar la información de las cuentas
function procesarCuentas() {
    let sumaAcreedores = 0;

    // Recorremos el array de cuentas
    for (let cuenta of cuentas) {
        let numeroCuenta = cuenta[0];
        let nombreCliente = cuenta[1];
        let saldoActual = cuenta[2];
        
        // Determinamos el estado de la cuenta
        let estado;
        if (saldoActual > 0) {
            estado = 'Acreedor';
            sumaAcreedores += saldoActual; // Sumamos el saldo si es acreedor
        } else if (saldoActual < 0) {
            estado = 'Deudor';
        } else {
            estado = 'Nulo';
        }

        // Mostramos la información de la cuenta
        console.log(`Número de cuenta: ${numeroCuenta}, Nombre del cliente: ${nombreCliente}, Estado de la cuenta: ${estado}`);
    }

    // Mostramos la suma total de los saldos acreedores
    console.log(`La suma total de los saldos acreedores es: ${sumaAcreedores}`);
}

// Ejecutamos las funciones
leerCuentas();
procesarCuentas();

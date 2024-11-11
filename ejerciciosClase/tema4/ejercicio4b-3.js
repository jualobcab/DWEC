function camelizar(cadena) {
    return cadena
        .split('-') // Separa la cadena por guiones
        .map((palabra, index) => {
            // Convierte la primera letra de cada palabra en mayúscula, excepto la primera
            if (index === 0) {
                return palabra.toLowerCase(); // La primera palabra en minúscula
            }
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // Capitaliza el resto
        })
        .join(''); // Une las palabras sin espacios
}

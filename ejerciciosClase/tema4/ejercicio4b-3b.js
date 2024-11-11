function capitalizarNombres(nombres) {
    return nombres.map(nombre => {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    });
}
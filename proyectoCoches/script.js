"use strict";

////////////////////////////////////////////////////////
//////////       FUNTIONS      /////////////////////////
////////////////////////////////////////////////////////
////////////////////  Variables   //////////////////////
let listaVehiculos=[];

////////////////////  Constantes  //////////////////////
const Combustible = Object.freeze({
    Gasolina:10,
    Diesel:15,
    Electrico:5,
    Gas:5
});
const TipoMoto = [
    "Deportiva",
    "Custom",
    "Motocross",
    "Adventure",
    "Scooter"
]

//////////////////////  Clases  /////////////////////////
class Vehiculo {
    constructor (marca, modelo, anyo, precio, stock){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.precio = precio;
        this.stock = stock;
    }
    vender() {
        this.stock = !this.stock;
    }
    obtenerDescripcion(){
        res = "Marca: "+this.marca+", Modelo: "+this.modelo+", Año: "+this.anyo+", Precio: "+this.precio+", Stock: ";
        if (this.stock){
            res += "Disponible"
        }
        else {
            res += "No disponible"
        }
        return res
    }
}
class Coche extends Vehiculo {
    constructor (marca,modelo,anyo,precio,stock,numeroPuertas,matricula,tipoCombustible){
        super(marca,modelo,anyo,precio,stock);
        this.numeroPuertas = numeroPuertas;
        this.matricula = matricula;
        this.tipoCombustible = tipoCombustible;
    }

    // Funciones
    calcularImpuestos(){
        return this.precio*(Combustible[this.tipoCombustible]/100)
    }
    obtenerDescripcion(){
        res = "Marca: "+this.marca+", Modelo: "+this.modelo+", Año: "+this.anyo+", Precio: "+this.precio+", Stock: ";
        if (this.stock){
            res += "Disponible"
        }
        else {
            res += "No disponible"
        }
        res += "Nº Puertas: "+this.numeroPuertas+", Matricula: "+this.matricula+", Combustible: "+this.tipoCombustible;
        return res
    }
}
class Motocicleta extends Vehiculo {
    constructor (marca,modelo,anyo,precio,stock,matricula,cilindrada,tipo){
        super(marca,modelo,anyo,precio,stock);
        this.matricula = matricula;
        this.cilindrada = cilindrada
        this.tipo = tipo;
    }

    // Funciones
    calcularImpuestos(){
        if (this.cilindrada<500){
            return this.precio*5/100;
        }
        else {
            return this.precio*15/100;
        }
    }
    obtenerDescripcion(){
        res = "Marca: "+this.marca+", Modelo: "+this.modelo+", Año: "+this.anyo+", Precio: "+this.precio+", Stock: ";
        if (this.stock){
            res += "Disponible"
        }
        else {
            res += "No disponible"
        }
        res += "Matricula: "+this.matricula+", Cilindrada: "+this.cilindrada+", Tipo: "+this.tipo;
        return res
    }
}

////////////////      FUNCIONES     ///////////////////
function crearCoche(marca,modelo,anyo,precio,stock,numeroPuertas,matricula,tipoCombustible){
    let resCoche = new Coche(marca,modelo,anyo,precio,stock,numeroPuertas,matricula,tipoCombustible);

}
function crearMotocicleta(marca,modelo,anyo,precio,stock,matricula,cilindrada,tipo) {

}
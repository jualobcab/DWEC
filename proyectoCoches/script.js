"use strict";

////////////////////////////////////////////////////////
//////////       FUNTIONS      /////////////////////////
////////////////////////////////////////////////////////
////////////////////  Variables   //////////////////////
let listaVehiculos=[];

////////////////////  Constantes  //////////////////////
// Tipos de combustibles y sus porcentajes de impuestos, lo cual ayuda a poder modificiarlo con tranquilidad en el futuro
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
        let res = "Marca: "+this.marca+", Modelo: "+this.modelo+", Año: "+this.anyo+", Precio: "+this.precio+", Stock: ";
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
        let res = "Marca: "+this.marca+", Modelo: "+this.modelo+", Año: "+this.anyo+", Precio: "+this.precio+", Stock: ";
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
        let res = "Marca: "+this.marca+", Modelo: "+this.modelo+", Año: "+this.anyo+", Precio: "+this.precio+", Stock: ";
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
    let matriculaEncontrada = false;

    listaVehiculos.forEach(
        (v)=>{
            if (resCoche.matricula == v.matricula){
                matriculaEncontrada = true;
            }
        });

    if (!matriculaEncontrada){
        listaVehiculos.push(resCoche);
    }
}
function crearMotocicleta(marca,modelo,anyo,precio,stock,matricula,cilindrada,tipo) {
    let resMotocicleta = new Motocicleta(marca,modelo,anyo,precio,stock,matricula,cilindrada,tipo);
    let matriculaEncontrada = false;

    listaVehiculos.forEach(
        (v)=>{
            if (resMotocicleta.matricula == v.matricula){
                matriculaEncontrada = true;
            }
        });

    if (!matriculaEncontrada){
        listaVehiculos.push(resMotocicleta);
    }
}
function listarVehiculos(array){
    let res = "<ul>";

    array.forEach(
        (v)=>{
                res += "<li>";
                res += v.obtenerDescripcion();
                res += "</li>";
        });
    res += "</ul>";

    return res;
}

function venderVehiculo(array, matricula){
    array.forEach(
        (v)=>{
            if(v.matricula == matricula){
                v.vender();
            }
        });
}

function calcularImpuestosTotal(array){
    let res = 0;
    array.forEach(
        (v)=>{
            if (v.stock){
                res += v.calcularImpuestos();
            }
        });
    return res;
}

// Funcion auxiliar para agilizar la introducción de datos de muestreo para realizar pruebas
function pruebaProfesor(){
    crearCoche("Toyota","Supra",2001,30000,true,5,"111111A","Gasolina");
    crearCoche("Honda","Civic",2002,20000,false,4,"222222A","Diesel");
    crearCoche("Fiat","Multipla",2003,10000,true,5,"333333A","Gasolina");

    crearMotocicleta("Yamaha","MT07",2004,5000,false,"MOTO1",500,"Deportiva");
    crearMotocicleta("Honda","CBR",2005,8000,true,"MOTO2",600,"Custom");
    crearMotocicleta("Suzuki","GSXR",2006,10000,true,"MOTO3",400,"Adventure");

}
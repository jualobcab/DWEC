"use strict";

////////////////////////////////////////////////////////
//////////       FUNTIONS      /////////////////////////
////////////////////////////////////////////////////////
////////////////////  Variables   //////////////////////


////////////////////  Constantes  //////////////////////
const Combustible = Object.freeze({
    Gasolina:10,
    Diesel:15,
    Electrico:5,
    Gas:5
});

//////////////////////  Clases  /////////////////////////
class Vehiculo {
    constructor (marca, modelo, anyo, precio, stock){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.precio = precio;
        this.stock = stock;
    }
}
class Coche extends Vehiculo {
    constructor (marca,modelo,anyo,precio,stock,numeroPuertas,matricula,tipoCombustible){
        super(marca);
        super(modelo);
        super(anyo);
        super(precio);
        super(stock);
        this.numeroPuertas = numeroPuertas;
        this.matricula = matricula;
        this.tipoCombustible = tipoCombustible;
    }

    // Funciones
    calcularImpuestos(){
        return this.precio*(Combustible[this.tipoCombustible]/100)
    }
}
class Motocicleta extends Vehiculo {
    constructor (marca,modelo,anyo,precio,stock,matricula,cilindrada,tipo){
        super(marca);
        super(modelo);
        super(anyo);
        super(precio);
        super(stock);
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
}
"use strict";

/////////////////  Clases y Objetos  ///////////////////
class Hospital {
    // Constructor
    constructor (){
        this.medicos = [];
        this.citas = [];
    }

    // Funciones
    altaMedico(medico){
        let repetido = false;
        for(var i = 0; i<this.medicos.length ;i++){
            if(this.medicos[i].idMedico == medico.idMedico){
                repetido = true;
            }
        }
        if (repetido){
            document.getElementById('listado').innerHTML = "<p>Error: Id Médico registrado previamente</p>";
            return false;
        }
        else {
            this.medicos.push(medico);
            document.getElementById('listado').innerHTML = "<p>Alta de médico OK</p>";
            return true;
        }
    }

    altaCita(cita){
        let encontrado = false;
        for(var i = 0; i<this.medicos.length ;i++){
            if(this.medicos[i].idMedico == cita.idMedico){
                encontrado = true;
            }
        }
        if (encontrado){
            this.citas.push(cita);
            document.getElementById('listado').innerHTML = "<p>Alta de cita OK</p>";
            return true;
        }
        else {
            document.getElementById('listado').innerHTML = "<p>Error: Id Médico no registrado</p>";
            return false;
        }
    }

    listadoMedicos(){
        let res = "<table><thead><tr><th>Id Medico</th><th>Nombre</th><th>Telefono</th><th>Email</th><th>Colegiado</th></tr></thead><tbody>";
        this.medicos.forEach(
            (m)=>{
                res += "<tr><td>"+m.idMedico+"</td>";
                res += "<td>"+m.nombre+"</td>";
                res += "<td>"+m.telefono+"</td>";
                res += "<td>"+m.email+"</td>";
                res += "<td>"+m.colegiado+"</td></tr>";
            });
        res += "</tbody>";
        let medicosSinEmail = this.medicos.filter((m) => m.email === "").length;
        res += "<tfoot>"+medicosSinEmail+" médicos sin email registrado</tfoot></table>";

        document.getElementById('listado').innerHTML = res;
    }

    listadoCitas(){
        let res = "<table><thead><tr><th>Id Medico</th><th>Nombre Medico</th><th>Nombre Paciente</th><th>Fecha y Hora</th></tr></thead><tbody>";
        this.citas.forEach(
            (c)=>{
                let nombreMedico = this.medicos.find((m) => m.idMedico === c.idMedico).nombre;
                res += "<tr><td>"+c.idMedico+"</td>";
                res += "<td>"+nombreMedico+"</td>";
                res += "<td>"+c.paciente+"</td>";
                res += "<td>"+c.fecha+" | "+c.hora+"</td></tr>";
        });
        res += "</tbody><table>";

        document.getElementById('listado').innerHTML = res;
    }
}
class Medico {
    // Constructor
    constructor (idMedico,nombre,telefono,email,colegiado){
        this.idMedico = idMedico;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.colegiado = colegiado;
    }

    // Funciones
    toHTMLrow (){
        res = "ID: "+this.idMedico+", Nombre: "+this.nombre+", Telefono: "+this.telefono+", Email: "+this.email+", Colegiado: "+this.colegiado;
        return res;
    }
}
class Cita {
    // Constructor
    constructor (idMedico,paciente,fecha,hora){
        this.idMedico = idMedico;
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;
    }

    // Funciones
    toHTMLrow (){
        res = "ID Medico: "+this.idMedico+", Paciente: "+this.paciente+", Fecha: "+this.fecha+", Hora: "+this.hora;
        return res;
    }
}
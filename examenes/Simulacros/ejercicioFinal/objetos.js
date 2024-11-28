"use strict";

class Hospital {
  constructor(medicos, citas) {
    this.medicos = [];
    this.citas = [];
  }

  //Introduce un objeto médico en el array de la clase
  altaMedico(oMedico) {
    const yaExisteEseId = this.medicos.some(
      (m) => m.idMedico === oMedico.idMedico
    );

    if (yaExisteEseId) {
      return false;
    } else {
      this.medicos.push(oMedico);
      return true;
    }
  }

  //introduce un objeto cita en el array de la clase
  altaCita(oCita) {

    const yaExisteEseId = this.medicos.some((m) => m.idMedico === oCita.idMedico);

    if (!yaExisteEseId) {
     return false;
    } else {
      this.citas.push(oCita);
      return true;
    }
  }

  //Crea una tabla con el contenido del array de médicos,
  //mostrando a traves de un for of todos los datos de cada uno

  listadoMedicos() {
    let s;
    s = "<table><caption>Listado de Médicos</caption>";
    s +=
      "<thead><tr><th>ID</th><th>Nombre</th><th>Teléfono</th><th>Email</th><th>Colegiado</th></tr></thead>";
    s += "<tbody>";

    for (let medico of this.medicos) {
      s += medico.toHTMLRow();
    }

    s += "</tbody></table>";

    const sinEmail = this.medicos.filter((m) => m.email === null).length;

    s += `<tfoot> Hay ${sinEmail} medicos sin email.</tfoot>`;

    return s;
  }

  //Crea una tabla con el contenido del array de citas,
  //mostrando a traves de un for of todos los datos de cada una

  listadoCitas() {
    let s;
    s = "<table><caption>Listado de Citas</caption>";
    s +=
      "<thead><tr><th>ID médico</th><th>Nombre de médico</th><th>Paciente</th><th>Fecha</th><th>Hora</th></tr></thead>";
    s += "<tbody>";

    for (let cita of this.citas) {
      s += cita.toHTMLRow();
    }

    s += "</tbody></table>";

    return s;
  }
}

class Medico {
  constructor(idMedico, nombre, telefono, email, colegiado) {
    this.idMedico = idMedico;
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.colegiado = colegiado;
  }

  //Convierte en fila de tabla los datos de médico, incorporando la función
  // que si el email está vacío será nulo
  toHTMLRow() {

    return `<tr><td>${this.idMedico}</td><td>${this.nombre}</td><td>${this.telefono}</td><td>${this.email}</td><td>${this.colegiado}</td></tr>`;
  }
}

class Cita {
  constructor(idMedico, paciente, fecha, hora) {
    this.idMedico = idMedico;
    this.paciente = paciente;
    this.fecha = fecha;
    this.hora = hora;
  }

  //Convierte a tabla los datos de la cita. Para conseguir el nombre del médico, recorremos el array de médicos
  // de hospital haciendo un find que la condicion sea que ambos id coincidan, para después conseguir su nombre en la variable nombremedico
  toHTMLRow() {
    const medico = hospital.medicos.find((m) => m.idMedico === this.idMedico);

    let nombreMedico = medico.nombre;

    return `<tr><td>${this.idMedico}</td> <td> ${nombreMedico} </td><td>${this.paciente}</td><td>${this.fecha}</td><td>${this.hora}</td></tr>`;
  }
}
